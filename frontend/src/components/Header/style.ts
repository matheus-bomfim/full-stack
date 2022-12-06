import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    background-color: gray;
    gap: 0rem;
    border-bottom: 2px solid black;

    @media(min-width: 765px){
        gap: 12rem;
    }
    
    @media(min-width: 1000px){
        gap: 45rem;
    }

    ul{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        list-style: none;
    }
    
    li{
        cursor: pointer;
        :hover{
            color: white;
        }
    }
    
` 