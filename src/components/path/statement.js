import React from "react"
import "./statement.css"

const Statement = () => {
  return (
    <div className="section">
      <div className="statement-container">
        <h3>
          despite academic performance decline in college, i have regained
          appreciation for{" "}
          <span className="higlight">software development</span> and{" "}
          <span className="higlight">computer science</span> in recent years
        </h3>
        <h3>
          my biggest strength is making dashboard interfaces using{" "}
          <span className="higlight">React</span>,{" "}
          <span className="higlight">Typescript</span> and{" "}
          <span className="higlight">D3</span>, although i also consider myself
          competent in backend development with{" "}
          <span className="higlight">Python</span> and{" "}
          <span className="higlight">CSS</span>
        </h3>
        <h3>
          my priority right now is{" "}
          <span className="higlight">strengthening</span> myself as a developer
        </h3>
        <h3>
          upon employment, i will be learning these technologies; independently,
          if my work does not require it
        </h3>
        <div className="learn-listing">
          Building <span className="higlight">performance critical</span> web
          systems with <span className="higlight">Rust</span> and{" "}
          <span className="higlight">GraphQL</span>
        </div>
        <div className="learn-listing">
          Strengthening <span className="higlight">CSS</span> and{" "}
          <span className="higlight">Design</span> skills
        </div>
        <h3>
          software development comprises of almost 70 percent of my life right
          now, and i can easily transfer my skills to employment
        </h3>
      </div>
    </div>
  )
}

export default Statement
