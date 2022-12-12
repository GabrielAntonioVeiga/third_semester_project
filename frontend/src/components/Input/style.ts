import styled from "styled-components"


export const StyledInput = styled.input`
  color: var(--middle-blue-green);
  background-color: var(--white);
  outline: none;
  border: none;
  position: relative;
  width: 100%;
  /* font: inherit; */
  font-size: 16px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  
  &::placeholder {
    font-size: 16px;
    color: var(--slate-gray);
  }
  `

export const StyledBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--slate-gray);
  width: 100%;
  height: 1px;
  
  &::before {
    content: "";
    position: absolute;
    background-color: var(--irresistible);
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
  }
  `

  export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: baseline;
    margin: 0 auto;
  
    i {
      margin-right: 1rem;
    }
  
    ${StyledInput}:focus + ${StyledBar}::before {
      transform: scaleX(1);
    }
  `