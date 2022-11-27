import styled from "styled-components";

export const StyledInput = styled.input`
    color: var(--middle-blue-green);
    background-color: var(--white);
    outline: none;
    border: none;
    position: relative;

    /* border-bottom: 2px solid var(--slate-gray); */

    &::placeholder {
        color: var(--slate-gray);
    }

    &::after {
        content: 'afdadf';
        width: 11rem;
        height: 3px;
        background-color: black;
        display: block;
        position: absolute; 
        bottom: 0;
        left: 0;
        /* transform: scaleX(0); */
        transform-origin: left;
        transition: transform .5s;
    }

    &:focus::after {
        transform: scaleX(1);
    }


    `;
    /* :focus .bar {
        animation-name: toogleColor;
        animation-duration: 1s;
        transform-origin: left;
        animation-fill-mode: forwards;
    } */
    
    /* border-bottom: 2px solid var(--irresistible); */
    /* @keyframes toogleColor {
        from {
            border-bottom: 2px solid var(--slate-gray);
        }
        to {
            border-bottom: 2px solid var(--irresistible);
        }
        
    } */

export const InputContainer = styled.div`
    margin-bottom: 1rem;

    .bar {
        height: 3px;
        width: 11rem;
    }
`