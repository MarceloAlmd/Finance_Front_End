import {AiOutlineArrowUp} from 'react-icons/ai'
import { Container, Content} from "./styles";
import { Header } from "../../components/header";
import {Button} from '../../components/button'
export function FinancialDetails () {
    return(
        <Container>
            <Header />
            <main>
                <Content>
                    <h1>Investimento</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Iusto maxime architecto fugit alias maiores obcaecati 
                        tempora similique, iste, eius enim dolores 
                        atque dicta quas molestias, voluptatum nisi quos temporibus ea.
                    </p>
                    
                    
                    <div>
                        Entrada
                        <span>
                            <AiOutlineArrowUp />
                        </span>
                    </div>
                    
                    <p>
                        Valor: 707,35 R$
                    </p>    
                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}