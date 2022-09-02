import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
  display: flex;
  border-bottom: 0.5rem solid ${colors.secondary};
  h1 {
    color: #FF0000;
    text-decoration: none;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.primary};
        }
      }
    }
  }
`