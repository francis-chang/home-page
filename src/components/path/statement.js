import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import "./statement.css"

library.add(faChevronRight)
const Statement = () => {
  return (
    <div className="section">
      <div className="statement-container">
        <h3>
          i like <span className="highlight">styled-components</span>,
          <span className="highlight"> react-spring</span>, and{" "}
          <span className="highlight">postgres</span>
        </h3>
        <h3>
          i like <span className="highlight">react hooks</span>. i rarely build{" "}
          <span className="highlight">class components</span> now.
        </h3>
        <h3>
          after using <span className="highlight">sagas</span>, i feel that{" "}
          <span className="highlight">redux</span> over engineers state
          management and i like using
          <span className="highlight"> useContext</span>,{" "}
          <span className="highlight"> useMemo</span>, and
          <span className="highlight"> useCallback</span> for a global store
        </h3>
        <h3>
          i think learning{" "}
          <span className="highlight">swift/kotlin/react-native</span> or{" "}
          <span className="highlight">keplergl</span> would be fun
        </h3>
        <h3>
          currently looking for a <span className="highlight">ui</span> or{" "}
          <span className="highlight">fullstack</span> role using any of these
          technologies - <span className="highlight">react</span>,{" "}
          <span className="highlight">d3</span> or{" "}
          <span className="highlight">python</span>
        </h3>
        <h3>Asking for</h3>
        <div className="learn-listing">
          <span style={{ marginRight: "1rem" }} className="highlight">
            {" "}
            $140k
          </span>
          San Francisco
        </div>
        <div className="learn-listing">
          <span style={{ marginRight: "1rem" }} className="highlight">
            {" "}
            $130k
          </span>
          San Jose / Seattle
        </div>
        <div className="learn-listing">
          <span style={{ marginRight: "1rem" }} className="highlight">
            {" "}
            $120k
          </span>
          Los Angeles
        </div>
        <div className="learn-listing">
          <span className="highlight" style={{ marginRight: "1rem" }}>
            {" "}
            $100k
          </span>{" "}
          Remote
        </div>
        <a href="http://zfc9d3f.com/">
          <h3 className="gohome">francis chang - zfc9d3f</h3>
        </a>
      </div>
    </div>
  )
}

export default Statement
