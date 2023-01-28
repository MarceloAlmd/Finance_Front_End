import {Container} from './styles'

export function FinancialLaunch({data, icon: Icon, isEntry, ...rest}){
    return (
        <Container 
            {...rest}
            isEntry={isEntry}
        >
            <div>
                <h2>{data.title}</h2>
                <p>{`RS ${data.value}`}</p>
            </div>

            {Icon && <Icon size={25}/>}
        </Container>
    )
}