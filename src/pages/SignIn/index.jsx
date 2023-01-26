import {useAuth} from '../../hooks/auth'
import {HiOutlineMail, HiOutlineLockClosed} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Container, Form} from "./styles";

export function SignIn() {
    const data = useAuth();
    console.log("meu contexto =>", data)

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
                    />

                    <Input 
                        icon={HiOutlineLockClosed}
                        placeholder="Senha"
                        type="password"
                    />
               </div>
               
                
                <div>
                    <Button title="Entrar" />
                    <Link to="/register">
                        Criar Conta
                    </Link>
                </div>
                
                
            </Form>
        </Container>
    )
}