import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 140px;

        background: ${({theme}) => theme.COLORS.BACKGROUND_800};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            font-size: 38px;
            color: ${({theme}) => theme.COLORS.GREEN_300};
        };
    };

`;

export const Form = styled.form`
    border-radius: 10px;
    width: 500px;
    margin: 30px auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    > button {
        margin-bottom: 30px;
    }
`;

export const Avatar = styled.div`

    position: relative;
    margin: -124px auto 32px;
    width: 186px;
    height: 186px;
    
    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        border-radius: 50%;

        background: ${({theme}) => theme.COLORS.GREEN_300} ;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 7px;
        bottom: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }
    }

`;