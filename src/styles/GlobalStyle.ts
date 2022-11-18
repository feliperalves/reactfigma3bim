import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
  }
`
export const colors = {
  primary: "#FF0000",
  secondary: "#FF0000",
  third: "#FF0000",
  thirdLight: "#ffffff",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#660000"
}
