import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gray;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60rem;

    @media(min-width: 680px){
        height: 65rem;
    }
`