import styled from 'styled-components';
import { COLORS } from '../../stylesGlobal';


export const Boxes = styled.div`

  position: relative;
  width: 100%;
  height: 250px;
  margin: 25px auto;
  transition: 0.5s;

  :hover{
    transform: translateY(-20px);
  }

  ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, white, blue);
  }

  ::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, white, blue);
    filter: blur(15px);
  }

  span{
    position: absolute;
    top:6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: rgba(0,0,0,0.6);
    z-index: 2;
  }

  @media(min-width: 600px){
    width: 500px;
  }
`

export const Content = styled.div`

  position: relative;
  z-index:10;
  padding: 40px 0 0 0;

  a{
    color: ${COLORS.branco};
    text-decoration: none;
  }

`

export const Title = styled.h1`

  font-size: 40px;
  margin-top: 15%;

  @media(min-width: 450px){
    margin-top: 20%;
  }

  @media(min-width: 600px){  
    margin-top: 10%;
  }
`

export const TextForm = styled.div`
  margin: auto;
  width: 85%;

  @media(min-width: 600px){
    width: 45%;
  }

`


export const TextContent = styled.div`

  padding: 5px 5px 5px 20px ;
  width: 85%;
  text-align: justify;
  font-size: 17px;

  @media(min-width: 600px){
    width: 45%;
  }

`

export const DivPai = styled.div`

display: flex;
flex-direction: column;
  @media(min-width: 600px){
    display: flex;
    flex-direction: row-reverse;
  }

`