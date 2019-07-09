import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./statement.css"

library.add(faChevronRight)
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
          my biggest strength is building elegant data visual dashboard
          interfaces using <span className="higlight">react</span>,{" "}
          <span className="higlight">typescript</span> and{" "}
          <span className="higlight">d3</span>, although i consider myself
          competent with <span className="higlight">css</span> and backend
          development with <span className="higlight">python</span> as well
        </h3>
        <h3>
          i dont use css frameworks, i build my own{" "}
          <span className="higlight">css</span>
        </h3>
        <h3>
          upon employment, i will be learning these technologies; independently,
          if my work does not require it
        </h3>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            building <span className="higlight">performance critical</span> web
            systems with <span className="higlight">rust</span> and{" "}
            <span className="higlight">graphql</span>
          </div>
        </div>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            strengthen <span className="higlight">CSS</span> and{" "}
            <span className="higlight">Design</span> skills
          </div>
        </div>
        <h3>
          i am confident i can transfer my skills to a work environment smoothly
        </h3>
      </div>
    </div>
  )
}

export default Statement
