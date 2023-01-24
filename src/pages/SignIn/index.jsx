import {HiOutlineMail, HiOutlineLockClosed} from 'react-icons/hi'

import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Container, Form} from "./styles";

export function SignIn() {
    return (
        <Container>
            <Form>   
               
                <h1>Financial I'N Hand</h1>
                <p>Seu controle financeiro na ponta do seu dedo</p>
                <h2>Entre no Aplicativo</h2>
                

               
                <Input 
                    icon={HiOutlineMail} 
                    placeholder="E-mail"
                    type="text"
                />

                <Input 
                    icon={HiOutlineLockClosed}
                    placeholder="Password"
                    type="password"
                />
                
                <div>
                    <Button title="Entrar" />
                    <Button title="criar conta" />

                </div>
                
                
            </Form>
        </Container>
    )
}