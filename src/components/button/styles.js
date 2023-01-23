import styled from "styled-components";

export const Container = styled.button`
    width: 50%;
    height: 46px;

    background: ${({theme}) => theme.COLORS.GREEN_300};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 10px;

    font-size: 18px;
    font-weight: 600;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GREEN_600};

    margin-top: 12px;

    &:disabled {
        opacity: 0.5;
    }
`;
