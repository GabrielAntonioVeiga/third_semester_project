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

  span {
    position: absolute;
    padding: 3px;
    top: 10px;
    right: 50px;
  }

  .close-button,
  .confirm-button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding-left: 5px;
  }
`
export const StyledInput = styled.input`
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
