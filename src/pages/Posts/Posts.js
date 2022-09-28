import styled from "styled-components";
import {HandlerPosts} from "../../components/HandlerPosts";

const TitleStyled = styled.h1`
  max-width: 1152px;
  width: 90%;
  margin: 0 67px;
  
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
    padding: 0 21px  ;
  }
`


export default function Posts() {

    return (
        <div>
            <TitleStyled> Posts </TitleStyled>
            <HandlerPosts/>
        </div>
    );
}
