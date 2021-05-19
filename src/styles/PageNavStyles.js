import styled from "styled-components";

export const PageNavStyles = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-top: 2px solid var(--myGrey);

  div {
    width: 8rem;
    display: flex;
    justify-content: center;
  }

  span {
    min-width: max-content;
  }
`;

export const ButtonStyles = styled.button`
  ${props => props.offset ? 'transform: translateY(-62%);' : null};
  border: 2px solid var(--textCol);
  background-color: var(--backgroundColBright);
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: var(--borad);
  transition: all 0.25s;
  width: 7rem;
  box-shadow: var(--boxShadow);

  &:disabled {
    filter: contrast(0.15) brightness(1.2);
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: var(--textCol);
    color: var(--backgroundCol);
  }

  &:focus {
    outline: 2px solid var(--textCol);
    outline-offset: 2px;
  }

  &:active {
    ${props => props.offset ? 'transform: translateY(-50%);' : 'transform: translateY(10%);'};
  }
`;

