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
    AiOutlineArrowUp
} from 'react-icons/ai'
import {useAuth} from '../../hooks/auth';
import {Container, Brand, Menu, Side, Content, NewFinancial} from './styles'; 
import {Header} from '../../components/header'
import { CardsSide } from '../../components/cardsSide';
import { MenuCards } from '../../components/menuCards';
import { Financial } from '../../components/financial';
import { FinancialLaunch } from '../../components/financialLaunch';
export function Home() {
    const {logout} = useAuth()
    return (
        <Container>
            <Brand>
                <h1>Financial On Hand</h1>
            </Brand>
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
                 
                    <FinancialLaunch 
                        title="Aluguel"
                        value="R$ 873,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                
                </Financial>

                <Financial title="saídas">  
                    <FinancialLaunch 
                        title="Cinema"
                        value="R$ 73,54"
                        icon={AiOutlineArrowDown}
                    />
   
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