import styled from "styled-components";

export const MainStyled = styled.div`
height: 100%;
width: 100%;
opacity: .7;
z-index: 0;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
justify-content: center;
align-content: start;
margin: 10px 0 10px 0;
`;

export const MainForm = styled.form`
height: auto;
grid-column: 1/3;
justify-self: center;
align-self: center;
`;

export const MainContainer = styled.div`
height: auto;
width: 100%;
display: grid;
`;

export const CardContainer = styled.div`
height: auto;
grid-column: 1/3;
`;

