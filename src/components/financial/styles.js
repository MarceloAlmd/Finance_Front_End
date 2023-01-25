import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 12px;
        
    }

    > div {
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        width: 100%; 
        height: 540px;
        border-radius: 19px;

        padding: 26px;

        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 0 6px transparent;
            background: transparent;

            border-radius: 10px;
        }
    }
        
`;