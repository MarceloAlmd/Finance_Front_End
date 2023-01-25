import styled from "styled-components";

export const Container = styled.div`
    min-width: 120px;
    min-height: 120px;
    background: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 19px;

    cursor: pointer;

    transition: all .4s;

    > button {
        border: 0;
        background: transparent;
        > svg {
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }
    }


`;