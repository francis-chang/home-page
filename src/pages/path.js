import ReactFullpage from "@fullpage/react-fullpage"
import React from "react"
import Audio from "../components/path/Audio"
import Experience from "../components/path/Experience"
import Projects from "../components/path/projects"
import Tech from "../components/path/Tech"

const SecondPage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Audio fullpageApi={fullpageApi}></Audio>
          <Experience fullpageApi={fullpageApi}></Experience>
          <Tech></Tech>
          <Projects></Projects>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default SecondPage
