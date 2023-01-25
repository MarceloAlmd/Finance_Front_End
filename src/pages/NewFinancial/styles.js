import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content"
    ;

    > main {
        display: flex;
        justify-self: center;
        align-items: center;
        width: 900px;
        margin-bottom: 58px;

    }
`;

export const Form = styled.form`
    background: ${({theme}) => theme.COLORS.BACKGROUND_400};
    border-radius: 46px;
    max-width: 650px;
    margin: auto;
    padding: 44px; 


    > div { 
        width: 100%;
        margin-bottom: 12px;
    }

    > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 76px;
    }

    > header {
        text-align: center;
        margin-bottom: 36px;
    }
`;