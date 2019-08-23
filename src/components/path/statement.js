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
          i like <span class="highlight">styled-components</span>
        </h3>
        <h3>
          for animations i use a mixture of{" "}
          <span class="highlight">css animations</span>,{" "}
          <span class="highlight">react-spring</span> and
          <span class="highlight"> d3-transitions</span>
        </h3>
        <h3>
          i like <span class="highlight">react hooks</span>. i rarely touch{" "}
          <span class="highlight">class components</span> now.
        </h3>
        <h3>
          after using <span class="highlight">sagas</span> for a year, i feel
          that <span class="highlight">redux</span> over engineers state
          management and i like using <span class="highlight">useContext</span>{" "}
          as a global store.
        </h3>
        <h3>
          i like building animations into my <span class="highlight">d3</span>{" "}
          visuals
        </h3>
        <h3>
          currently learning <span class="highlight">Scala</span> and{" "}
          <span class="highlight">Rust</span>
        </h3>
        <h3>
          my favorite color combination is{" "}
          <span style={{ backgroundColor: "#111", color: "#ffa51f" }}>
            #ffa51f
          </span>{" "}
          and{" "}
          <span style={{ backgroundColor: "#eee", color: "#06385e" }}>
            #06385e
          </span>
        </h3>
      </div>
    </div>
  )
}

export default Statement
