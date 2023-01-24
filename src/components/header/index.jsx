import { Container, Menu, Profile, Search } from "./styles";
import { Input } from "../../components/input";
import {HiSearch} from 'react-icons/hi'

export function Header() {
    return(
        <Container>
            <Profile>
                <img 
                    src="http://github.com/marceloalmd.png" 
                    alt="foto de perfil do usuário"
                 />

                <div>
                    <strong>Marcelo magalhaes</strong>
                    <span>Sair</span>
                </div>
            </Profile>

            <Menu>
               <ul>
                    <li>
                        <a href="#">Entradas</a>
                    </li>
                    <li>
                        <a href="#">Saídas</a>
                    </li>
                    <li>
                        <a href="#">Investimentos</a>
                    </li>
                    <li>
                        <a href="#">Pix</a>
                    </li>
                    <li>
                        <a href="#">Cartão</a>
                    </li>
                    
                </ul>
            </Menu>

            <Search>
                <Input icon={HiSearch}/>
            </Search>
            
        </Container>
    )
}