import { Container } from "./styles";

export function CardsSide({icon: Icon, title, isActive = false, ...rest}) {
    return(
        <Container 
            {...rest}
            isActive={isActive}>
            {Icon && <Icon size={25}/>}

            <button  >
                {title}
            </button>
        </Container>
    )
}