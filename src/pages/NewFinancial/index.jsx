import { Container, Form } from "./styles";
import {Header} from '../../components/header'
import {Input} from "../../components/input";
import {TextArea} from "../../components/textArea";
import {Button} from '../../components/button'

export function NewFinancial() {
    return(
        <Container>
            <Header />
            <main>

                <div>

                </div>
                
                <Form>
                    <header>
                        <h1>lançamento financeiro</h1>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea 
                        placeholder="Observações"
                    />
                    <Input placeholder="Tipo: entrada ou saída" />
                    <Input placeholder="Valor" />

                    <div>
                        <Button title="Lançar" />
                        <Button title="Cancelar" />
                    </div>
                </Form>
            </main>
        </Container>
    ) 
}