import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  //max-width: 1152px;
  //width: 100%;
  //border-radius: 4px;
  gap: 24px;
  padding: 20px;
  //justify-content: center;
  align-items: baseline;
  border-bottom: 1px solid #E0E0E0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
  }
`
const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
const PreviewStyled = styled.img`
  max-width: 246px;
  width: 246px;
  max-height: 180px;
  height: 180px;
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    max-width: fit-content;
    max-height: fit-content;
    height: 230px;
    width: 339px;
  }
`
const RightStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -15px;
  max-height: content-box;
  max-width: content-box;
  @media (max-width: 768px) {
    justify-content: left;
    align-items: flex-start;
    max-width: max-content;
    width: 322px;
  }

`
const TitleStyled = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #21243D;
  margin: 3px;
`
const BodyStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background: #142850;
  border-radius: 20px;
  padding: 10px 15px;
`
const NameStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`
const SectionStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`
const CommentsStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
  padding: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
`


export const Posts = (props) => {
    const {title, body, userName, userLastName, preview, comments, ...rest} = props;

    return (
        <ContainerStyled {...rest}>

            <LeftStyled>
                <PreviewStyled src={preview} alt="Profile picture"/>
                <NameStyled>{userName} {userLastName}</NameStyled>
            </LeftStyled>

            <RightStyled>
                <TitleStyled> {title}</TitleStyled>
                <BodyStyled>{body}</BodyStyled>
                <SectionStyled>
                    <h3>Comments</h3>
                    <CommentsStyled>{comments}</CommentsStyled>
                </SectionStyled>
            </RightStyled>

        </ContainerStyled>
    )
}
