import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container  = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-columns: 350px auto;
    grid-template-rows: 100px 175px auto 64px;
    grid-template-areas: 
        "search header"
        "side menu"
        "side content"
        "newFinancial content"
    ;

    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;
export const Search  = styled.div`
    grid-area: search;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    > button {
        border: none;
        margin-right: 12px;
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        width: 100%;
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        margin-right: 8px;

        input {
            margin-left: 8px;
    
        }
    }

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.GREEN_300};
    }
`;
export const Menu  = styled.nav`
    
    grid-area: menu;
    width: 700px;
    margin: auto;
    height: 140px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    overflow-x: auto;
    border-radius: 10px;

    > div:hover {
        opacity: 0.7;
    }

    ::-webkit-scrollbar {
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 0 6px transparent;
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};

        border-radius: 10px;
    }


`;

export const Side  = styled.div`
    grid-area: side;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 35px 12px 35px 12px;

    > div:hover {
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
        cursor: pointer;
    }
`;

export const Content  = styled.div`
    grid-area: content;
    padding: 24px;

    display: flex;
    justify-content: center;
    gap: 30px;
`;
export const NewFinancial = styled(Link)`
    grid-area: newFinancial;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_400};
    color: ${({theme}) => theme.COLORS.WHITE};
   

    > svg:first-child{
        color: ${({theme}) => theme.COLORS.GREEN};
    } 
    > svg:last-child{
        color: ${({theme}) => theme.COLORS.RED};
    } 
`;

