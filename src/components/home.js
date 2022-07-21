import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title = 'Model 3'
        description = "Order Online for Touchless Delivery"
        background= "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        downArrow = "true"
      />
      <Section
        title = 'Model Y'
        description = "Order Online for Touchless Delivery"
        background= "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section
        title = 'Model S'
        description = "Order Online for Touchless Delivery"
        background= "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section
        title = 'Model X'
        description = "Order Online for Touchless Delivery"
        background= "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section
        title = 'Solar Panels'
        description = "Lowest Cost Solar Panels in America"
        background= "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section
        title = 'Solar Roof'
        description = "Produce Clean Energy From Your Roof"
        background= "solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section
        title = 'Accessories'
        description = ""
        background= "accessories.jpg"
        leftBtnText = "Shop Now"
      />
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