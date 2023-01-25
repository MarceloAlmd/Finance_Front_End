import {Container} from './styles'

export function FinancialLaunch({icon: Icon, title, value, isEntry, ...rest}){
    return (
        <Container 
            {...rest}
            isEntry={isEntry}
        >
            <div>
                <h2>{title}</h2>
                <p>{value}</p>
            </div>

            {Icon && <Icon size={25}/>}
        </Container>
    )
}