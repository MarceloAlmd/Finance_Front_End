import { Container } from "./styles";

export function MenuCards({icon: Icon, ...rest}) {
    return(
        <Container>
            <button {...rest} >
                {Icon && <Icon size={25}/>}
            </button>
        </Container>
    )
}