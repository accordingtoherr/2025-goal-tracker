// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  input, button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  input[type="text"] {
    width: 200px;
    padding: 5px;
  }
`;
