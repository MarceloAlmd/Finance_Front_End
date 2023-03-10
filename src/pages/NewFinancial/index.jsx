import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Form } from "./styles";
import {Header} from '../../components/header'
import {Input} from "../../components/input";
import {TextArea} from "../../components/textArea";
import {Button} from '../../components/button'
import { Link } from 'react-router-dom';

export function NewFinancial() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [theValue, setTheValue] = useState("")

    const navigate = useNavigate()
    async function handleNewFinancial() {
        if(!title) {
            return alert("Prencha o campo de título")
        }
        if(!type) {
            return alert("marque se é entrada ou saída")
        }
        if(!theValue) {
            return alert("Informe o valor que deseja adicionar")
        }


        await api.post("/finance", {
            title,
            description,
            type,
            value: theValue
        })

        alert("sucesso ao fazer um lançamento")
        navigate("/")
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>lançamento financeiro</h1>
                    </header>

                    <Input 
                        placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />


                    <div>
                        <div>
                            <label htmlFor="entrada">entrada</label>
                            <input
                                className="radioEntry"
                                htmlFor="entrada"
                                type="radio" 
                                name="type"
                                value="entrada"
                                onChange={e => setType(e.target.value)}    
                            />
                        </div>
                        

                        <div>
                            <label htmlFor="saida">saída</label>
                            <input
                                className="radioOut" 
                                htmlFor="saida"
                                type="radio" 
                                name="type"  
                                value="saida"  
                                onChange={e => setType(e.target.value)}   
                            />
                        </div>
                        
                    </div>


                
                    <Input 

                        placeholder="Valor" 
                        type="number"
                        onChange={e => setTheValue(e.target.value)}
                    />

                    <div>
                        <Button 
                            title="Lançar" 
                            onClick={handleNewFinancial}    
                        />
                        <Link to="/">
                            Cancelar
                        </Link>
                    </div>
                </Form>
            </main>
        </Container>
    ) 
}