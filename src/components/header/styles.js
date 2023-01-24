import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 135px;
    width: 100%;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 80px;

`;

export const Menu = styled.nav`
    width: 300px;
    height: 56px;
    display: flex;
    align-items: center;
    
    padding: 0 12px;
    overflow: auto;
    ::-webkit-scrollbar{
        background: transparent;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.BACKGROUND_400};
        border-radius: 8rem;
        box-shadow: inset 0 0 0px 6px transparent;
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    a {
        color: ${({theme}) => theme.COLORS.WHITE};
        transition: all .4s;
    }

    a:hover {
        color: ${({theme}) => theme.COLORS.GREEN_300};
    }
`;


export const Profile = styled.div`
    display: flex;
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
    }
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;

export const Search = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

`;