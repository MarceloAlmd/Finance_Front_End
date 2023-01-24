import { Container, Profile, Search } from "./styles";
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
                    <button>Sair</button>
                </div>
            </Profile>

            <Search>
                <Input 
                    placeholder="Pesquisar um financeiro"
                    icon={HiSearch}
                />
            </Search>
            
        </Container>
    )
}