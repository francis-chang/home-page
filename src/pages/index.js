import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body{
    background-color: #2a2c33;
    color: #d5d7dd;

  }
  h1{
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 900;
  }
  h3, p{
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Ubuntu Mono", sans-serif;
  font-weight: 600;
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
  font-size: 3rem;
  color: #ffc970;
  @media only screen and (max-width: 910px) {
    font-size: 2.7rem;
  }
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`
const Subtitle = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem 0.5rem;
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
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
  @media only screen and (max-width: 910px) {
    font-size: 1.2rem;
    padding: 0.7rem 0.5rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1.1rem;
    padding: 0.5rem;
    text-align: center;
  }
`
const Button = styled.button`
  cursor: pointer;
  color: #d5d7dd;
  background-color: #2a2c33;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1.4rem;
  border: 3px solid #d5d7dd;
  &:hover {
    transition-duration: 250ms;
    color: ${p => p.color};
    border: 3px solid ${p => p.color};
  }
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 910px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
    &:not(:last-child) {
      margin-right: 0rem;
    }
  }
`

const ButtonContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
`

const IndexPage = () => (
  <Container>
    <Global />
    <ConContainer>
      <Title>francis chang</Title>
      <Subtitle>
        i do web stuff in python & typescript, data visuals with d3
      </Subtitle>

      <Listing>touched down in '92</Listing>
      <Listing>taiwanese-korean-american</Listing>
      <Listing>born in california, raised in texas</Listing>
      <Listing>i enjoy listening to stephen a and max in the morning</Listing>
      <ButtonContainer>
        <Button color="#fc9d3f">github</Button>
        <Button color="#fc9d3f">twitter</Button>
        <Button color="#fc9d3f">youtube</Button>
      </ButtonContainer>
    </ConContainer>
  </Container>
)

export default IndexPage
