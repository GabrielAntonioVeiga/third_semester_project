import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  min-width: 0;
  max-width: 600px;
  min-height: 0;
  border: none;
  margin: 20px auto;

  .card {
    position: relative;
    margin: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--irresistible);
    color: var(--middle-blue-green);
    text-align: center;
  }

  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }

  .close-button {
    border: none;
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    padding: 3px;
    top: 10px;
    right: 50px;
  }
`
export const StyledInput = styled.input`
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
