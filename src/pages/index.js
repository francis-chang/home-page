import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import styled, { createGlobalStyle } from "styled-components"
import SEO from "../components/seo"

library.add(faYoutube, faTwitter, faGithub, faArrowDown)

const Global = createGlobalStyle`
  @keyframes bounce {
    
  }

  html{
    font-size: 100%;
  }

  body{
    background-color: #232b36;
    color: #d5d7dd;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Ubuntu Mono", sans-serif;
  font-weight: 600;
  margin-bottom: 4rem;
  margin-top: 5rem;
`
const ConContainer = styled.div`
  padding-top: 2rem;
  @media only screen and (max-width: 900px) {
    padding-top: 1.3rem;
  }
`
const Title = styled.div`
  text-align: center;

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
  text-align: center;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 910px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1.2rem;
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
    padding-left: 1.5rem;
    text-align: center;
  }
`

const Button = styled.button`
  cursor: pointer;
  width: 10rem;
  color: #d5d7dd;
  background-color: #232b36;
  padding: 0.3rem 1rem;
  border-radius: 4px;
  border: 3px solid #d5d7dd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    transition-duration: 250ms;
    color: ${p => p.color};
  }
  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 910px) {
    padding: 0.3rem 0.8rem;
  }

  @media only screen and (max-width: 800px) {
    padding: 0.3rem 0.5rem;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

const ButtonContainer = styled.div`
  padding-left: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
`

const ButtonText = styled.div`
  font-family: "Ubuntu Mono", sans-serif;
  font-weight: 900;
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

const onClick = site => {
  console.log(site)
  window.open(site, "_blank")
}

const IndexPage = () => {
  return (
    <Container>
      <SEO title="francis chang" />
      <Global />
      <ConContainer>
        <Title>francis chang (zfc9d3f)</Title>
        <Subtitle>i do web stuff with python & typescript</Subtitle>

        <Listing>taiwanese korean american</Listing>
        <Listing>touched down '92 in california, raised in texas</Listing>
        <Listing>i enjoy listening to stephen a and max in the morning</Listing>

        <ButtonContainer>
          <Button
            color="#ffc970"
            onClick={() => onClick("http://github.com/zfc9d3f")}
          >
            <Icon color="#bfbfbf">
              <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
            </Icon>
            <ButtonText>github</ButtonText>
          </Button>
          <Button
            color="#ffc970"
            onClick={() => onClick("http://twitter.com/zfc9d3f")}
          >
            <Icon color="#1dcaff">
              <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
            </Icon>
            <ButtonText>twitter</ButtonText>
          </Button>
          <Button
            color="#ffc970"
            onClick={() =>
              onClick(
                "https://www.youtube.com/channel/UCHtLTNWrpDl_kwy3oOIiy9Q"
              )
            }
          >
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
