import { Container, Content} from "./styles";
import { useState, useEffect } from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { Header } from "../../components/header";
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";

export function FinancialDetails () {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const params = useParams();

    async function deleteDetails() {
        const confirm = window.confirm("Deseja realmente remover a nota ?")
        if(confirm) {
            await api.delete(`/finance/${params.id}`);
            alert("lançamento deletado")
            navigate("/")
        }
    }

    useEffect(() => {
       async function fetchFinancialDetails() {
            const response = await api.get(`/finance/${params.id}`);
            setData(response.data)
       }

       fetchFinancialDetails()
    }, [])
    return(
        <Container>
            <Header />

            {
                data &&  
                    
                <main>
                    
                    <Content>
                        <h1>{data.title}</h1>

                        <p>{data.description}</p>
                        
                        
                        <p>{data.type}</p>

                        <p>{`R$ ${data.value}`}</p>    
                        
                        <footer>
                            <Link to="/">
                                Voltar
                            </Link>
                            <button
                                type="button"
                                onClick={deleteDetails}
                            >
                                
                                <AiOutlineDelete />
                            </button>
                        </footer>
                    </Content>
                </main>
            }
        </Container>
    )
}