import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled, { createGlobalStyle } from "styled-components"

library.add(faYoutube, faTwitter, faGithub)

const Global = createGlobalStyle`

  body{
    background-color: #2a2c33;
    color: #d5d7dd;
    
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Ubuntu Mono", sans-serif;
  font-weight: 600;
  margin-bottom: 4rem;
`
const ConContainer = styled.div`
  padding-top: 2rem;
  max-width: 1000px;
  @media only screen and (max-width: 900px) {
    padding-top: 1.3rem;
  }
`
const Title = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.3rem;

  font-size: 3rem;
  color: #ffc970;
  @media only screen and (max-width: 910px) {
    font-size: 2.7rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 2.3rem;
    text-align: center;
  }
  @media only screen and (max-width: 550px) {
    line-height: 2.5rem;
  }
`
const Subtitle = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem;
  color: #ffc970;
  border-bottom: 3px solid #ffc970;
  @media only screen and (max-width: 910px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1.2rem;
    text-align: center;
  }
`
const Listing = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0.8rem 0.5rem;
  font-size: 1.3rem;
  @media only screen and (max-width: 910px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1.1rem;
    padding: 0.3rem;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
  }
`

const LastLasting = styled.div`
  cursor: pointer;
`

const Button = styled.button`
  cursor: pointer;
  width: 10rem;
  color: #d5d7dd;
  background-color: #2a2c33;
  padding: 0.3rem 1rem;
  border-radius: 4px;
  border: 3px solid #d5d7dd;
  display: flex;
  justify-content: space-around;
  &:hover {
    transition-duration: 250ms;
    color: ${p => p.color};
    border: 3px solid ${p => p.color};
  }
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 910px) {
    padding: 0.3rem 0.8rem;
  }

  @media only screen and (max-width: 800px) {
    padding: 0.3rem 0.5rem;
    &:not(:last-child) {
      margin-right: 0rem;
      margin-bottom: 0.5rem;
    }
  }
`

const ButtonContainer = styled.div`
  padding-left: 0.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
`

const ButtonText = styled.div`
  padding: 0rem 0.3rem;
  font-size: 1.3rem;
  @media only screen and (max-width: 910px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`

const Icon = styled.div`
  padding: 0rem 0.3rem;
  font-size: 1.5rem;
  color: ${p => p.color};
  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`

const UL = styled.ul`
  list-style-type: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`

const LI = styled.li``

const IndexPage = () => {
  const [toggle, setToggle] = useState(false)

  const animatedProps = useSpring({
    height: toggle ? "20rem" : "0rem",
    overflow: "hidden",
  })

  useEffect(() => {
    console.log(toggle)
  })
  return (
    <Container>
      <Global />
      <ConContainer>
        <Title>francis chang (zfc9d3f)</Title>
        <Subtitle>i do web stuff in python, typescript and d3</Subtitle>
        <Listing>touched down in '92</Listing>
        <Listing>taiwanese korean american</Listing>
        <Listing>born in california, raised in texas</Listing>
        <Listing>i enjoy listening to stephen a and max in the morning</Listing>
        <Listing>
          <LastLasting onClick={() => setToggle(!toggle)}>
            i like art. click for a list of my favorite artists
          </LastLasting>
          <animated.div style={animatedProps}>
            <UL>
              <LI>aw anqi</LI>
              <LI>ching yeh</LI>
              <LI>pablo hurtado de mendoza</LI>
              <LI>n kayurova</LI>
              <LI>wei feng</LI>
              <LI>g liulian</LI>
              <LI>chun lo</LI>
              <LI>sachin teng</LI>
            </UL>
          </animated.div>
        </Listing>
        <ButtonContainer>
          <Button color="#ffc970">
            <Icon color="#bfbfbf">
              <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
            </Icon>
            <ButtonText>github</ButtonText>
          </Button>
          <Button color="#ffc970">
            <Icon color="#1dcaff">
              <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
            </Icon>
            <ButtonText>twitter</ButtonText>
          </Button>
          <Button color="#ffc970">
            <Icon color="#ff3333">
              <FontAwesomeIcon icon={["fab", "youtube"]}></FontAwesomeIcon>
            </Icon>
            <ButtonText>youtube</ButtonText>
          </Button>
        </ButtonContainer>
      </ConContainer>
    </Container>
  )
}

export default IndexPage
