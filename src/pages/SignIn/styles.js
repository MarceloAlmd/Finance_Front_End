import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

   
`;

export const Form = styled.form`
    width: 700px;
    height: 700px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    > h1 {
        position: absolute;
        top: 20px;
        font-size: 38px;
        color: ${({theme}) => theme.COLORS.GREEN_300};

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme}) => theme.COLORS.GREEN_300};
    };

    > p {
        position: absolute;
        top: 100px;
        font-size: 20px;

        color: ${({theme}) => theme.COLORS.WHITE};
        opacity: 0.6;
        
    };

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        opacity: 0.6;
        padding-bottom: 12px;
    };

    > div:nth-child(4) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
    }

    > div:last-child {
        padding-top: 18px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;

        a {
            width: 40%;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${({theme}) => theme.COLORS.GREEN_300};
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border-radius: 10px;

            font-size: 18px;
            font-weight: 600;
            
            border-bottom-width: 5px;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.GREEN_600};

            margin-top: 12px;
       
        }
    };

`;