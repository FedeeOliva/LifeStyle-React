import React from 'react'
import styled from "styled-components";
import carro from '../../img/carro.png'
const ContainerCar = styled.div`
    width: 13%;
    height: 35px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    & span:nth-child(1){
        font-style: oblique;
        
    }
    & span:nth-child(2){
        font-weight: bold;
        
    }
    & div{
        width: 35px;
        height: 35px;
        display:flex;
        justify-content: center;
        align-items: center;
        background: #0095ff;
    }
    & div img{
        width: 22px;
        height: 22px;
        
    }
`
const Car = () =>{

 return(
    <ContainerCar>
        <span>0 items</span>  |
        <span>$0,00</span>
        <div>
        <img src={carro} />
        </div>
       
    </ContainerCar>
 )
}
export default Car