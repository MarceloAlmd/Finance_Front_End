import { Container, Form } from "./styles";
import {Header} from '../../components/header'
import {Input} from "../../components/input";
import {TextArea} from "../../components/textArea";
import {Button} from '../../components/button'
import { Link } from 'react-router-dom';

export function NewFinancial() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>lançamento financeiro</h1>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea 
                        placeholder="Observações"
                    />
                    <Input placeholder="Tipo: entrada ou saída" />
                    <Input 
                        placeholder="Valor" 
                        type="number"
                    />

                    <div>
                        <Button title="Lançar" />
                        <Link to="/">
                            Cancelar
                        </Link>
                    </div>
                </Form>
            </main>
        </Container>
    ) 
}