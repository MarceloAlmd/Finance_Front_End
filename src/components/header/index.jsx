import {useAuth} from '../../hooks/auth'
import {api} from '../../services/api'

import { Container, Profile, Search } from "./styles";
import { Input } from "../../components/input";
import {HiSearch} from 'react-icons/hi'



export function Header() {
    const {user} = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg;
    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src={avatarUrl} 
                    alt={user.name}
                 />

                <div>
                    <span>bem-vindo</span>
                    <strong>{user.name}</strong>
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