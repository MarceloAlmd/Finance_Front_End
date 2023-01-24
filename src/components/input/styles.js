import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 5px;

    color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    margin-bottom: 16px;
    border-radius: 10px;

    > svg {
        color: ${({theme}) => theme.COLORS.GREEN_300};
        margin-left: 12px;
    }

    > input {
        height: 46px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

        border: none;
        border-radius: 10px;



    }
`;