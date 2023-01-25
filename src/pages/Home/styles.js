import styled from "styled-components";

export const Container  = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100px 175px auto 64px;
    grid-template-areas: 
        "brand header"
        "side menu"
        "side content"
        "newFinancial content"
    ;

    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;
export const Brand  = styled.div`
    grid-area: brand;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.GREEN_300};
    }
`;
export const Menu  = styled.nav`
    grid-area: menu;
   
    width: 650px;
    margin: auto;
    height: 145px;

    display: flex;
    align-items: center;

    padding: 0 12px;
    overflow-x: auto;
    border-radius: 10px;

    > div:hover {
        opacity: 0.7;
    }

    ::-webkit-scrollbar {
        width: 1px;
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 0 6px transparent;
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};

        border-radius: 10px;
    }


`;

export const Side  = styled.div`
    grid-area: side;
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
    align-items: center;
    justify-content: center;
    gap: 30px;
`;
export const NewFinancial = styled.button`
    grid-area: newFinancial;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_400};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;

    > svg:first-child{
        color: ${({theme}) => theme.COLORS.GREEN};
    } 
    > svg:last-child{
        color: ${({theme}) => theme.COLORS.RED};
    } 
`;