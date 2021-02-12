import React, { useRef} from "react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";
import { addProductsAction } from "../../action/addProductsAction";
import Car from './car'
import logo from '../../img/logo.png'
import search from '../../img/search.png'
const colorMain = "#0095ff";
const Container = styled.header`
  width: 90%;
  min-height: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -130px;
`;
const ImgMain = styled.img`
  max-width: 100%;
`;
const ContainerSearch = styled.div`
  width: 400px;
  height: 35px;
  border: 1.7px solid #0095ff;
  display:flex;
  justify-content: space-between;
  align-items: center;
  & img{
    width: 25px;
    height:25px;
    margin-right: 5px;
  }
`
const InputSearch = styled.input`
  width: 90%;
  height: 30px;
  outline: none;
  background: none;
  border: none;
 
`;

const Header = () => {
  const dispatch = useDispatch()
  const inputText = useRef(null)
 const handleText = () =>{
   

  dispatch(addProductsAction(inputText.current.value))
 }
  return (
    <Container>
     <ImgMain src={logo} />
     <ContainerSearch>
     <InputSearch onChange={handleText} placeholder='¿Que estas buscando?' ref={inputText} />
     <img src={search} />
     </ContainerSearch>
    
    <Car/>
     
    </Container>
  );
};

export default Header;
