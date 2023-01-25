import {
    AiOutlineDashboard, 
    AiOutlineCalendar,
    AiOutlineUser,
    AiOutlineStar,
    AiOutlineBug,
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

import {Container, Brand, Menu, Side, Content, NewFinancial} from './styles'; 
import {Header} from '../../components/header'
import { CardsSide } from '../../components/cardsSide';
import { MenuCards } from '../../components/menuCards';
import { Financial } from '../../components/financial';
import { FinancialLaunch } from '../../components/financialLaunch';
export function Home() {
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
                    icon={AiOutlineBug}
                    title="reportar bug"
                />
                <CardsSide 
                    icon={AiOutlineSetting}
                    title="Configurações"
                />
                <CardsSide 
                    icon={AiOutlineLogout}
                    title="Sair"
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
                        title="Investimento"
                        value="R$ 973,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="bolsa"
                        value="R$ 1973,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Câmbio"
                        value="R$ 73,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Viagem"
                        value="R$ 343,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="NuInvest"
                        value="R$ 3973,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Computador"
                        value="R$ 9573,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Investimento"
                        value="R$ 973,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Aluguel"
                        value="R$ 873,54"
                        icon={AiOutlineArrowUp}
                        isEntry
                    />
                    <FinancialLaunch 
                        title="Mercado"
                        value="R$ 973,54"
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
                    <FinancialLaunch 
                        title="Lanche"
                        value="R$ 83,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Jogos"
                        value="R$ 23,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Rolê"
                        value="R$ 7,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Casamento"
                        value="R$ 1973,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Rolê"
                        value="R$ 93,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Capivara"
                        value="R$ 3,54"
                        icon={AiOutlineArrowDown}
                    />
                    <FinancialLaunch 
                        title="Camisa"
                        value="R$ 73,54"
                        icon={AiOutlineArrowDown}
                    />

                    
                </Financial>
            </Content>

            <NewFinancial>
                <AiOutlinePlus/>
                    novo lançamento
                <AiOutlineArrowDown/>
            </NewFinancial>
        </Container>
    );
};