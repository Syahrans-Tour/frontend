import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
        * {
            @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
            font-family: 'Questrial', sans-serif;
        }
        :root {
            --border-radius: 4px;
            --color-text: #333;
            --color-primary: #7026b9;
            --color-code-bg: #fff4db;
            --color-code: #8a6534;
            --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
                sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
                "Courier New", monospace;
            --font-lg: 18px;
            --font-md: 16px;
            --font-sm: 14px;
            --font-sx: 12px;
            --line-height-loose: 1.75;
            --line-height-normal: 1.5;
            --line-height-dense: 1.1;
            --space-1: 4px;
            --space-2: 8px;
            --space-3: 16px;
            --space-4: 24px;
            --space-5: 32px;
            --space-6: 64px;
            --size-content: 54rem;
            --size-gutter: var(--space-5);
            --size-gap: var(--space-6);
        }
        h1, h2, h3, p, h6, h5 {
            margin: 0;
          }
          a {
            cursor: pointer;
            text-decoration: none;
            color: #000000;
          }
          button {
            outline: none;
            border: none;
            cursor: pointer;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          input{
            border: none;
            outline: none;
          }
`;
