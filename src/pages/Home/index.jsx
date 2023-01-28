import {
    AiOutlineDashboard, 
    AiOutlineCalendar,
    AiOutlineUser,
    AiOutlineStar,
    AiOutlineSetting,
    AiOutlineLogout,
    AiOutlinePlus,
    AiOutlineArrowDown,
    AiOutlineUnorderedList,
    AiFillBank,
    AiOutlineCoffee,
    AiOutlineSend,
    AiOutlineScan,
    AiOutlineBranches,
    AiOutlineFall,
    AiOutlineBarcode,
    AiOutlineArrowUp,
    AiOutlineSearch
} from 'react-icons/ai'
import { api}  from '../../services/api'
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Search, Menu, Side, Content, NewFinancial } from './styles'; 
import { Header } from '../../components/header'
import { CardsSide } from '../../components/cardsSide';
import { MenuCards } from '../../components/menuCards';
import { Financial } from '../../components/financial';
import { FinancialLaunch } from '../../components/financialLaunch';
import { Input } from '../../components/input';
import { Button } from '../../components/button'


export function Home() {
    const {logout} = useAuth()
    const navigate = useNavigate()
    const [search, setSearch] = useState("");
    const [finances, setFinances] = useState([]);

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    async function fetchFinance() {
        const response = await api.get(`/finance?title=${search}`)
        setFinances(response.data)
    }
  
    useEffect(() => {
        fetchFinance()
    }, [])

    return (

        <Container>
            <Search>
                <Input 
                    placeholder="pesquisar lançamentos"
                    onChange={e => setSearch(e.target.value)}
                />

                <Button 
                    onClick={fetchFinance}
                    icon={AiOutlineSearch} 
                />      
            </Search>

           <Header /> 

            <Side>
                <CardsSide 
                    icon={AiOutlineDashboard}
                    title="Dashboard"
                    isActive
                />

                <CardsSide 
                    icon={AiOutlineUnorderedList}
                    title="lançamentos"
                />
                
                <CardsSide 
                    icon={AiOutlineCalendar}
                    title="Calendario"
                />
                <CardsSide 
                    icon={AiOutlineUser}
                    title="Usuário"
                />
                <CardsSide 
                    icon={AiOutlineStar}
                    title="Favoritos"
                />

                <CardsSide 
                    icon={AiOutlineSetting}
                    title="Configurações"
                />

                <CardsSide 
                    icon={AiOutlineLogout}
                    title="Sair"
                    onClick={logout}
                />
        
            </Side>

            <Menu>
                <MenuCards icon={AiOutlineBarcode}/>
                <MenuCards icon={AiOutlineFall}/>
                <MenuCards icon={AiFillBank}/>
                <MenuCards icon={AiOutlineCoffee}/>
                <MenuCards icon={AiOutlineSend}/>
                <MenuCards icon={AiOutlineScan}/>
                <MenuCards icon={AiOutlineBranches}/>
            </Menu>

            <Content>
                <Financial title="entradas">   
                   {
                        finances.map(finance => finance.type === "entrada" && (
                            <FinancialLaunch 
                                icon={AiOutlineArrowUp}
                                isEntry
                                key={finance.id}
                                data={finance}
                                onClick={() => handleDetails(finance.id)}
                            />
                        ))
                   }
                </Financial>

                <Financial title="saídas">
                    {

                        finances.map(finance => finance.type === "saida" && (
                            <FinancialLaunch 
                                icon={AiOutlineArrowDown}
                                key={finance.id}
                                data={finance}
                                onClick={() => handleDetails(finance.id)}
                            />
                        ))
                    }
                 </Financial>


            </Content>

            <NewFinancial to="/new"> 
                <AiOutlinePlus/>
                    novo lançamento
                <AiOutlineArrowDown/>
            </NewFinancial>
        </Container>
    );
};