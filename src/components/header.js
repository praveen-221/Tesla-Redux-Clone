import React, {useState} from 'react'
import styled from "styled-components";
import {items, cars} from '../data';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div `
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div `
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    margin: 5px;
    font-weight: 600;
    font-size: 17px;
    padding: 5px 10px;
    flex-wrap: no-wrap;
  }
  a:hover {
    backdrop-filter: blur(2px) saturate(115%);
    -webkit-backdrop-filter: blur(2px) saturate(115%);
    background-color: rgba(17, 25, 40, 0.05);
    border-radius: 15px;
  }
  @media screen and (max-width: 1100px){
    display: none;
  }
`

const RightMenu = styled.div `
  display: flex;
  align-items: center;
  a{
    margin: 5px;
    font-weight: 600;
    font-size: 17px;
    padding: 5px 10px;
  }
  a:hover {
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    background-color: rgba(17, 25, 40, 0.5);
    border-radius: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const BurgerMenu = styled.div`
  width: 270px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  text-align: start;
  list-style: none;
  transform: ${props => props.show ? `translateX(0)`: `translateX(100%)`};
  transition: transform 0.3s;
  li {
    margin-right: 20%;
    padding: 10px 10px;
    font-weight: 600;
    color: black;
    opacity: 0.75;
    border-radius: 10px;
    cursor: pointer;
  }
  li:hover {
    background: rgba(0,0,0,0.1);
    border-radius: 15px;
  }
`
const CustomClose = styled(CloseIcon) `
`

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10%;
`

function Header() {
  const [MenuStatus, setMenuStatus] = useState(false);
  const toggleAction = () => {
    setMenuStatus(!MenuStatus);
  }
  return (
    <Container>
      <a><img src="/images/logo.svg" alt = "Logo"></img></a>
      <Menu>
        {
          cars.map((car, id) => {
            return <a key={id} href = {"#"+car}>{car}</a>
          })
        }
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <a href='#' onClick={toggleAction}>Menu</a>
      </RightMenu>
      <BurgerMenu show={MenuStatus}>
        <CloseWrap><CustomClose onClick={toggleAction} /></CloseWrap>
        {items.map((element, i) => {
          return <li key = {i}>{element}</li>
        })}
      </BurgerMenu>
    </Container>
  );
}

export default Header;