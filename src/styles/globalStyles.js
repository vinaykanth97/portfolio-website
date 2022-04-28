import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
    background: #000;
    color:#fff ;
    font-family: 'Poppins', sans-serif;
    font-size:100%;
  }
  img{
      max-width: 100%;
      vertical-align: middle;
  }
  ul{
      padding:0;
    li{
      list-style:none;
      font-size:1.125em;
    line-height:1.2;
  }
  }
  h1{
    font-size:5em;
    font-weight:bold;
    line-height:1.2;
  }
  h2{
    font-size:2.5em;
    line-height:1.2;
  }
  h5{
    font-size:1.563em;
    line-height:1.3;
  }
  h6{
    font-size: 1.375em;
    line-height:1.4;
  }
  p{
    font-size:1.125em;
    line-height: 1.5;
  }
  a{
    font-size:1em;
    line-height:1;
    text-decoration:none;
    color:#fff;
  }
  .d-flex{
    display:flex;
  }
  .align-center{
    align-items:center;
  }
`
export default GlobalStyle
