import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 46px;
    background: ${({theme, isActive}) => isActive ? theme.COLORS.BACKGROUND_400 : `transparent`};
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 10px;

    transition: all 1s;

    margin-bottom: 16px;
    
    > button {
        background: 0;
        border: 0;
        /* border: 1px solid red; */
        /* width: 100%; */

        font-size: 18px;
        font-weight: 400;

        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > svg {
        color: ${({theme}) => theme.COLORS.GREEN_300};
        margin-left: 9px;
    }
`;