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

    > div:nth-child(5) {
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 76px;

        a {

            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 46px;

            background: ${({theme}) => theme.COLORS.GREEN_300};
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};

            border: none;
            border-radius: 10px;

            font-size: 18px;
            font-weight: 600;
            border-bottom-width: 5px;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.GREEN_600};

            margin-top: 12px;
        }
    }

    > header {
        text-align: center;
        margin-bottom: 36px;
        color: ${({theme}) => theme.COLORS.GREEN_300};
    }

    > div:nth-child(4) {
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        height: 56px;
        padding: 16px;

        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        color: grey;

        > div {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .radioEntry{
            appearance: none;
            width: 20px;
            height: 20px;

            border: 1px solid grey;
            border-radius: 50%;

            :checked {
                background: ${({theme}) => theme.COLORS.GREEN_300};
                border: none;
            }
        }

        .radioOut {
            appearance: none;
            width: 20px;
            height: 20px;

            border: 1px solid grey;
            border-radius: 50%;

            :checked {
                background: ${({theme}) => theme.COLORS.RED};
                border: none;
            }
        }

    

    }
   
`;