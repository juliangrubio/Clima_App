import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid hsla(218, 100%, 42%, 1);
    outline: none;
    padding: 0 0.5rem;
    font-weight: 400;
    font-size: large;
    width: 300px;
    height: 40px;
    border-radius: 5px;
`;

export const DivNoSuggest = styled.div`
color: #999;
padding: .4rem;
font-size: .9rem;
`;

export const Ulsuggests = styled.ul`
border-top-width: 0;
list-style: none;
margin-top: 3px;
padding-left: 0;
max-width: 318px;
background-color: #fff;
height: auto;
border-radius: 2px 2px 5px 5px;

.sugerencia-activa {
    background-color: grey;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
}
`;

export const Lisuggests = styled.li`
padding: .3rem;
color: black;

:hover {
    background-color: grey;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
}
`;





// EJEMPLO MODELO DE CLASES 

// const SignupForm = ({ className }) => (
//     <form className={className}>
//       <input className="input" />
//       <button className="button">Button</button>
//     </form>
//   );

//   const Form = styled(SignupForm)`
//     .input {
//       background-color: palegreen;
//     }

//     .button {
//       background-color: palevioletred;
//     }
//   `;


//-------------------------------------------------------




//   .sugerencia-activa, .sugerencias li:hover {
//     background-color: grey;
//     color: #fff;
//     cursor: pointer;
//     font-weight: 700;
//   }

//   .sugerencias li:not(:last-of-type) {
//     border-bottom: 1px solid #999;  
//   }
