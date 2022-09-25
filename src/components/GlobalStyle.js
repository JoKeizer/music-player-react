import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, 0.5) transparant;
    }

    *::-webkit-scrollbar {
        width: 5px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.7);
        border-radius: 20px;
        border: transparent;
    }

    html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
    }
    body{
        background: white;
        color: black;
        font-family: 'Oswald', sans-serif;

    }
    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid black;
        background: transparent;
        color: black;
        transition: all 0.5s ease;
        &:hover {
            background: rgb(65, 65, 65);
            color: white;
        }
        &.library-active {
            background: rgb(65, 65, 65);
            color: white;
        }
    }
    h1 {
      color: black;
      font-weight: 900;
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        font-weight: 900;

    }
    h3{
        color: black;
    }
    p{
        padding: 3rem 0rem;
        color: black;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
    span{
        font-weight: bold;
        color: black;
    }
    a{
        font-size: 1.1.rem;
    }
    .selected {
        background-color: pink;
    }

    input[type="range"]:focus {
        outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        background: black;

    }

`;
export default GlobalStyle;
