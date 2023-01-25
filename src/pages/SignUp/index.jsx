import {HiOutlineMail, HiOutlineLockClosed, HiOutlineUser} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Container, Form} from "./styles";

export function SignUp() {
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
                    />
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
                
                
                
                <Button title="criar conta" />

                <Link to="/">
                    voltar para o login
                </Link>
                
                
            </Form>
        </Container>
    )
}