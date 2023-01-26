import {useState} from 'react';
import {useAuth} from '../../hooks/auth'
import {HiOutlineMail, HiOutlineLockClosed} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Container, Form} from "./styles";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn() {
        signIn({email, password})
    }

    return (
        <Container>
            <Form>   
               
                <h1>Finances on Hand</h1>
                <p>Seu controle financeiro na ponta do seu dedo</p>
                <h2>Entre no Aplicativo</h2>
                

               <div>
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
               
                
                <div>
                    <Button 
                        title="Entrar" 
                        onClick={handleSignIn}
                    />

                    <Link to="/register">
                        Criar Conta
                    </Link>
                </div>
                
                
            </Form>
        </Container>
    )
}