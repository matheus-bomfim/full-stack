import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 20rem;
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
        width: 5rem;
        height: 1.5rem;
    }
`

export const ButtonRegister = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
`

