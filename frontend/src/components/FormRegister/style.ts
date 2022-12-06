import styled from "styled-components"

interface Props {
    width: string;
  }
  
export const Container = styled.div<Pick<Props,'width'>>`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: ${props => props.width};
    background-color: white;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input{
        width: 10rem;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 1.5rem;
    }

    p{
        margin: -10px;
        font-size: xx-small;
        width: 20rem;
        height: 0.5rem;
        color: red;
    }
`