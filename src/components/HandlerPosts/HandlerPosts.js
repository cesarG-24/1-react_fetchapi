import styled from "styled-components";
import {useState} from "react";
import {useApiPosts} from "../../hooks";

import {Posts} from '../Posts';


const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  width: 90%;
  gap: 24px;
  padding: 20px;
  align-content: center;
  align-items: center;
  margin: 10px 50px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    text-align: left;
  }
`
const SearchStyled = styled.input`
  width: 100%;
`
const BtnStyled = styled.button`
  gap: 20px;
  //border: 0.5px ;
  //border-radius: 10px;
  //box-shadow: 0 0 3px 1px grey ;
  margin: 10px;

  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  transition: all 0.3s ease;

  :hover {
    box-shadow: -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  }
`


export const HandlerPosts = () => {

    const [search, setSearch] = useState('');
    const {postsHandler, nextPage, prevPage, counter} = useApiPosts();

    const handleFilter = postsHandler.filter(post => post.title.toLowerCase()
        .includes(search.toLowerCase()));

    const handleSearch = ({target}) => setSearch(target.value);

    console.log(handleFilter)

    return (
        <ContainerStyled>
            <SearchStyled value={search} onInput={handleSearch} placeholder='Search'/>
            <div>
                <BtnStyled onClick={prevPage}>Back</BtnStyled>
                <span>{counter}</span>
                <BtnStyled onClick={nextPage}>Next</BtnStyled>
            </div>

            <div>
                {handleFilter.map(post => <Posts key={post.id}
                                                 title={post.title}
                                                 body={post.body}
                                                 userName={post.author?.firstName}
                                                 userLastName={post.author?.lastName}
                                                 preview={post.author?.image}
                                                 comments={post.feedback?.body}
                />)}
            </div>

            <div>
                <BtnStyled onClick={prevPage}>Back</BtnStyled>
                <span>{counter}</span>
                <BtnStyled onClick={nextPage}>Next</BtnStyled>
            </div>
        </ContainerStyled>)
}


