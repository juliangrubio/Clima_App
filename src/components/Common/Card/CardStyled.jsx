import styled from "styled-components";

export const CardStyled = styled.div`
width: 100%;
background-color: #00072c9b;
opacity: .7;
display: grid;
grid-template-columns: .75fr 1fr;
grid-template-rows: 70px 1fr;
justify-content: center;
border-radius: 10px;
`;

export const ImgCard = styled.img`
justify-self: end;
align-self: center;
margin-right: 30px
`;

export const Temp = styled.h1`
height: auto;
color: #fff;
font-size: 2em;
font-weight: bold;
align-self: end;
`;

export const ExtraContainer = styled.div`
grid-column: 1/3;
`;

export const MiH = styled.h3`
justify-self: start;
align-self: start;
color: #fff;
margin: 10px;
`;



