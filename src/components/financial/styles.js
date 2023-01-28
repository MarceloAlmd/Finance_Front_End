import styled from "styled-components";

export const Container = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    > h1 {
        font-size: 18px;
        font-weight: normal;
        margin: 20px 0 12px 0;

        
    }

    > div {
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        width: 100%; 
        height: 350px;
        border-radius: 19px;
        box-shadow: 1px 0 20px 1px ${({theme}) => theme.COLORS.BACKGROUND_400};

        padding: 26px;

        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 6px; 
            background: transparent;
        };
        ::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 0 2px transparent;

        };
    };
        
`;