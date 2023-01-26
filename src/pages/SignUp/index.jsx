import {api} from '../../services/api';
import {useState} from 'react';
import {HiOutlineMail, HiOutlineLockClosed, HiOutlineUser} from 'react-icons/hi';
import {Link, useNavigate} from 'react-router-dom';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import { Container, Form} from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos");
        };

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("não foi possível cadastrar");
            };
        });


    };
    return (
        <Container>
            <Form>   

                <h1>Finances on Hand</h1>
                <p>Seu controle financeiro na ponta do seu dedo</p>
                <h2>Crie sua conta</h2>
                
                <div>
                    <Input 
                        icon={HiOutlineUser} 
                        placeholder="Nome"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        icon={HiOutlineMail} 
                        placeholder="Email"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        icon={HiOutlineLockClosed}
                        placeholder="Senha"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                
                
                
                <Button 
                    title="criar conta" 
                    onClick={handleSignUp}
                />

                <Link to="/">
                    voltar para o login
                </Link>
                
                
            </Form>
        </Container>
    )
}