import React from "react"

const Experience = ({ fullpageApi }) => {
  return (
    <div className="section">
      <p>Section 2 (welcome to fullpage.js)</p>
      <button onClick={() => fullpageApi.moveSectionDown()}>
        Click me to move down
      </button>
    </div>
  )
}

export default Experience
