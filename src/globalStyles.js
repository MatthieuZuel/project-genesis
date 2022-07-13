import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600 !important;
    }

    .info {
        width: 100%;
        background-color: #004aad;

        .wrapper {
            width: min(1100px, calc(100% - 20px));
            padding-block: 10vh;
            padding-block-end: 5vh;
            margin-inline: auto;
            display: grid;
            place-content: center;

            img {
                width: auto;
                height: 100%;
                max-width: 100%;
                max-height: max(550px, 80vh);

            }
        }
    }
`;

export default GlobalStyle;
