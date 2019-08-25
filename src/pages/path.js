import ReactFullpage from "@fullpage/react-fullpage"
import React from "react"
import Audio from "../components/path/Audio"
import Experience from "../components/path/Experience"
import Projects from "../components/path/projects"
import Statement from "../components/path/statement"
import Tech from "../components/path/Tech"

const SecondPage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Audio></Audio>
          <Experience></Experience>
          <Tech></Tech>
          <Projects></Projects>
          <Statement></Statement>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default SecondPage
