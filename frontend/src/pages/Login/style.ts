import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  max-width: 40rem;
  padding: 5rem 1rem 1rem 1rem;
  border-radius: 1rem;
  width: 23rem;
  background-color: var(--white);
  margin: auto;
  margin-top: 7rem;

  strong {
    display: absolute;
    color: var(--white);
    font-size: 20px;
  }

  form {
    padding: 2.5rem;
    padding-top: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    margin-left: 8px;
    text-decoration: none;
    cursor: pointer;
    color: #a1a;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const StyledHeaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1px;
  left: -0.5px;
  height: 4rem;
  width: 100.5%;
  border-radius: 0.9rem 0.9rem 100% 100%;
  background: linear-gradient(
    to left,
    var(--irresistible),
    var(--russian-violet)
  );
`
