import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 100px;
    width: 100%;

    background: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content:space-between ;    
    padding: 0 80px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
`;

export const Profile = styled(Link)`
    cursor: pointer;
    display: flex;
    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        > strong {
            opacity: 0.8;
            font-size: 18px;
        }

        > span {
            color: ${({theme}) => theme.COLORS.WHITE};
            opacity: 0.5;
        }

        > button:hover {
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }
    }
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

`;

export const Search = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        > input {
            background: none;
        }
    }

`;