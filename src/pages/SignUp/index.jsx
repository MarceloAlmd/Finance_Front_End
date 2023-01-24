import {HiOutlineMail, HiOutlineLockClosed, HiOutlineUser} from 'react-icons/hi'

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
                
                
                
                <Button title="criar conta" />

                
                
                
            </Form>
        </Container>
    )
}