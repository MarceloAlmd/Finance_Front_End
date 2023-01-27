import { useState } from 'react';
import {useAuth} from "../../hooks/auth"
import {Container, Form, Avatar} from './styles';
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import { Link } from "react-router-dom";
import avatarImg from '../../assets/avatar_placeholder.svg'
import {api} from '../../services/api'
export function Profile() {
    const {user, updatedProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordNew, setPasswordNew] = useState()
    const [passwordOld, setPasswordOld] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            new_password: passwordNew,
            old_password: passwordOld
        };

        await updatedProfile({user, avatarFile})
    }

    function handleAvatarChange (event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    
                    <img 
                        src={avatar} 
                        alt="perfil do usuário" 
                    />
                    
                  

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file" 
                            id="avatar"
                            onChange={handleAvatarChange}
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button 
                    title="salvar" 
                    onClick={handleUpdate}    
                />
                
            </Form>
           
        </Container>
    )
}