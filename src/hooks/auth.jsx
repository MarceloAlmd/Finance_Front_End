import { createContext, useContext, useState, useEffect} from "react";

import {api} from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [data, setData] = useState({})

    async function signIn({email, password}) {

        try {
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;

            localStorage.setItem("@financial:user", JSON.stringify(user));
            localStorage.setItem("@financial:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})

        }catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            }else {
                alert("não foi possível entrar")
            };
        };
        
    };

    function logout() {
        localStorage.removeItem("@financial:token");
        localStorage.removeItem("@financial:user");

        setData({});
    }

    async function updatedProfile({user, avatarFile}) {
        try{
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm);

                user.avatar = response.data.avatar
            }
            await api.put("/users", user);
            localStorage.setItem("@financial:user", JSON.stringify(user));

            setData({user, token: data.token});
            alert("Perfil atualizado")


        }catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            }else {
                alert("não foi possível atualizar")
            };
        };
    }

    useEffect(() => {
        const token = localStorage.getItem("@financial:token")
        const user = localStorage.getItem("@financial:user")
        if(token && user ) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token, 
                user: JSON.parse(user)
            })
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{
            signIn, 
            logout,
            updatedProfile,
            user: data.user,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
export {AuthProvider, useAuth};