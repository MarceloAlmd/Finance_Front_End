import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
      
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }


    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .4s;
    }

    button:hover, a:hover {
        filter: brightness(1.2);
    }
`;