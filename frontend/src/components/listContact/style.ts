import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 20rem;
    background-color: white;
    overflow: auto;
    gap: 1.5rem;
    border-top: 2px solid black;

    @media(min-width: 650px){
        align-items: center;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    margin: 2px;
    div{
        display: flex;
        flex-direction: row;
    }
    @media(min-width: 1000px){
        width: 20rem;
        justify-content: center;
    }
`

