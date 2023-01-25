import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 135px auto;
    grid-template-areas: 
        "header"
        "content"
    ;
    
    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }

`;

export const Content = styled.div`
    border-radius: 10PX;
    max-width: 450px;

    margin: 0 auto;
    padding: 5px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    > div {
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
        border-radius: 10px;
        padding:12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > span {
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }
    }

    > p {
        text-align: justify;
    }

    > p:nth-child(4) {
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
        border-radius: 10px;
        padding:12px;
    }

   

    > footer {
        max-width: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;

        > button:nth-child(1) {
            align-self: center;
            width: 80%;
        }

        a {
            width: 90%;
            height: 46px;

            background: ${({theme}) => theme.COLORS.GREEN_300};
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;

            font-size: 18px;
            font-weight: 600;
            border-bottom-width: 5px;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.GREEN_600};

            margin-top: 12px;
        }

      

        > button:nth-child(2) {
            margin-top: 12px;
            background: none;
            border: 0;
            svg {
                font-size: 38px;
                color: ${({theme}) => theme.COLORS.RED};
            }

        }
    };

`;