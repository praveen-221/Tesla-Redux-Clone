import React from 'react'
import styled from "styled-components";
import Section from './Section';
import {homePageItems} from '../data';

function Home() {
  return (
    <Container>
      {homePageItems.map((item, id) => {
        return <Section
        key = {id}
        title = {item.title}
        description = {item.description}
        background= {item.background}
        leftBtnText = {item.leftBtnText}
        rightBtnText = {item.rightBtnText}
        downArrow = {item.downArrow}/>
      })}
    </Container>
  )
}

export default Home;

const Container = styled.div `
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 0px;
`