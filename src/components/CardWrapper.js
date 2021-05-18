import styled from "styled-components"

const CardWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 1rem;
  overflow-y: scroll;

`;

const CardWrapper = ({ children }) => {
  return (
    <CardWrapperStyles>
      {children}
    </CardWrapperStyles>
  )
}

export default CardWrapper
