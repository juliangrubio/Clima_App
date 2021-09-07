import styled from 'styled-components';

const colorsButton = [
    {
        type: 'primary',
        color: '#fff',
        background: '#0f52ba'
    },
    {
        type: 'default',
        color: '#000',
        background: '#f3f2f1'
    },
    {
        type: 'success',
        color: '#fff',
        background: '#3a6351'
    }
]

export const ButtonComponentStyled = styled.button`

    grid-auto-flow: column; 
    justify-self: center;
    border: none;
    padding: 15px 12px 15px 12px;
    margin: 10px;
    width: 300px;
    height: 45px;

    background: ${props => {
        const buttonTypeSelected = colorsButton.find(x => x.type === props.type);
        return buttonTypeSelected;
    }};

    color: ${props => {
        const buttonTypeSelected = colorsButton.find(x => x.type === props.type);
        return buttonTypeSelected;
    }};

    border-radius: 10px;
    font-size: 14px;
    :hover {
        cursor: pointer;
        box-shadow: 0 0 10px ${props => {
            const buttonTypeSelected = colorsButton.find(x => x.type === props.type);
            return buttonTypeSelected.background;
        }};
    }
    :active {
        opacity: .3;
    }

`;
