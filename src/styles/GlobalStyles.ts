import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.scss";
import "./custom.scss";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: "PretendardM", sans-serif;
        font-size: var(--font-size-16);
    }
`;

export default GlobalStyle;
