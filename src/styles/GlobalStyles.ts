import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.scss";
import "./custom.scss";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body, body>div#root {
        width: 100%;
        font-family: "PretendardM", sans-serif;
        font-size: var(--font-size-14);
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: var(--font-black);
    }
`;

export default GlobalStyle;
