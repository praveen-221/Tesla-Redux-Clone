import React from 'react';
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Wrap = styled.div `
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url('/images/${props.bg}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start; 
  scroll-snap-stop: normal;
`

const Text = styled.div `
  margin-top: 15vh;
  text-align: center;
`

const ButtonCluster = styled.div `
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 640px){
    flex-direction: column;
  }
` 

const LeftButton = styled.div `
  background-color: rgba(23, 26, 32, 0.8);
  width: 15rem;
  height: 2.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.7px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton) `
  background-color: #e9eaeb;
  opacity: 0.7;
  color: black; 
`
const DownArrow = styled.img `
  cursor: pointer;
  overflow-x: hidden;
  height: 35px;
  animation: arrowDown infinite 1.5s;
`

const Buttons = styled.div``

function Section(props) {
  const {title, description, background, leftBtnText, rightBtnText, downArrow} = props;
  return (
    <Wrap bg = {background}>
      <Fade direction='up'>
        <Text>
          <h1 style = {{fontSize: "40px"}}>{title}</h1>
          <p style = {{fontWeight: '500', margin: "8px", fontSize: "18px"}}>{description}</p>
        </Text>
      </Fade>
      <Buttons>
        <Fade direction='up'>
          <ButtonCluster>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText && <RightButton>
              {rightBtnText}
            </RightButton>}
          </ButtonCluster>
        </Fade>
        {downArrow && <DownArrow style = {{marginBottom: "13px"}} src = {'/images/down-arrow.svg'}></DownArrow>}
      </Buttons>
    </Wrap>
  )
}

export default Section;