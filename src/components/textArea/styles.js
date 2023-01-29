import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: 0;
    resize: none;
    border-radius: 10px;
    
    margin-bottom: 8px;
    padding: 16px;

`;