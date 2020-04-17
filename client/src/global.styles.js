import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
      font-family: 'Poppins', sans-serif;
      padding:20px 40px;

      @media screen and (max-width: 800px) {
            padding: 10px;
      }
    }
    
    a {
      text-decoration: none;
      color: #111;
    }
    
    * {
      box-sizing: border-box;
    }




`;
