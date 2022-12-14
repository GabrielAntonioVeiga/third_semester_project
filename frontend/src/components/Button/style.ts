import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 56px;
  margin: 1rem 3rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    to left,
    var(--irresistible),
    var(--russian-violet)
  );
  border: 0.5rem solid var(--white);
  outline: none;
  color: var(--light-cyan);
  border-radius: 28px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to top,
      var(--irresistible),
      var(--russian-violet)
    );
  }
`
