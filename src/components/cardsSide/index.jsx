import { Container } from "./styles";

export function CardsSide({icon: Icon, title, isActive = false, ...rest}) {
    return(
        <Container isActive={isActive}>
             {Icon && <Icon size={25}/>}

            <button {...rest} >
                {title}
            </button>
        </Container>
    )
}