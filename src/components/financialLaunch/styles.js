import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 100%;
    height: 56px;
    transition: all .4s;

    :hover{
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
    }
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    margin-bottom: 12px;


    > div {
        padding: 9px;

        > h2 {
            font-size: 16px;
        }

        > p {
            font-size: 14px;
        }
    }

    > svg {
        margin-right: 12px;
        color: ${({theme, isEntry}) => isEntry ? theme.COLORS.GREEN : theme.COLORS.RED}
    }
   
`;