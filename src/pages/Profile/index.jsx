import { Container, Form, Avatar} from "./styles";
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import { Link } from "react-router-dom";
export function Profile() {
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
                        src="https://github.com/marceloalmd.png" 
                        alt="perfil do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file" 
                            id="avatar"
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="email"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="salvar" />
                
            </Form>
           
        </Container>
    )
}