import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html,body,#root{
    height: 100%;
    width: 100%;
}
hmtl{
    font-size: 62.5%;
}

body{
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.4;

    a,button{
        font-family: inherit;
    }

    h1,h2,h3{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;  
    } 
}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: auto;
`;
