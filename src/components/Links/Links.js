import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  align-items: center;
  justify-content: flex-end;
  padding: 27px 60px;
  @media (max-width: 768px) {
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;

  }
`

export const Links = (props) => {
    const {children} = props;
    return <ContainerStyled>{children}</ContainerStyled>
}
