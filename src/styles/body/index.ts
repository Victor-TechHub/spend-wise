import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    }

`

export const Logo = styled.span`
   color: ${({ theme }) => theme.secondary};
   font-weight: 400;
   letter-spacing: 2px;
   display: flex;
   font-size: 1.5em;
`