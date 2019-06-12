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
  padding-left: 3rem;
`

const IndexPage = () => (
  <Container>
    <Global />
    <h1>francis chang</h1>
    <h3>i do web stuff in python & typescript, data visuals with d3</h3>

    <p>touched down in '92</p>
    <p>taiwanese-korean-american</p>
    <p>born in california, raised in texas</p>
    <p>i enjoy listening to stephen a and max in the morning</p>
  </Container>
)

export default IndexPage
