import { Container } from "./styles";

export function Financial({title, children}) {
    return(
        <Container>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </Container>
    )
}