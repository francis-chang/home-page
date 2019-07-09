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
          despite academic decline in college, i have regained appreciation for{" "}
          <span className="higlight">software development</span> in recent years
        </h3>
        <h3>
          my strength is building data visual interfaces using{" "}
          <span className="higlight">react</span>,{" "}
          <span className="higlight">typescript</span> and{" "}
          <span className="higlight">d3</span>, although i consider myself
          competent with <span className="higlight">css</span> and backend
          development with <span className="higlight">python</span> as well
        </h3>
        <h3>
          my weakness is, even though i read about{" "}
          <span className="higlight">systems that scale</span>, dealt with
          caching on <span className="higlight">redis</span> and load balancing
          with <span className="higlight">nginx</span>, i have minimal
          experience with scaling
        </h3>
        <h3>
          upon employment, i will be learning these technologies; independently,
          if my work does not require it
        </h3>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            building <span className="higlight">performance critical </span>
            systems with <span className="higlight">rust</span> and{" "}
            <span className="higlight">graphql</span>
          </div>
        </div>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            strengthen <span className="higlight">css</span> and{" "}
            <span className="higlight">design</span> skills
          </div>
        </div>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            <span className="higlight">swift</span> for mobile development
          </div>
        </div>
        <div className="learn-listing">
          <FontAwesomeIcon icon="chevron-right" className="learning-icon" />
          <div>
            <span className="higlight">docker</span>
          </div>
        </div>
        <h3>
          i am confident i can transfer my skills to a work environment smoothly
          and be <span className="higlight">productive immediately</span>
        </h3>
      </div>
    </div>
  )
}

export default Statement
