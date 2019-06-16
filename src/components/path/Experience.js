import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import { curveCardinal, line } from "d3-shape"
import React, { useEffect, useRef, useState } from "react"
import "./experience.css"

const points = [
  2,
  4,
  10,
  8,
  9,
  14,
  8,
  5,
  3,
  2,
  5,
  7,
  8,
  10,
  11,
  15,
  11,
  14,
  12,
  17,
]

const Experience = ({ fullpageApi }) => {
  const [selection, setSelection] = useState(null)
  const lineRef = useRef(null)
  const x = scaleLinear()
    .range([0, 800])
    .domain([0, 20])

  const y = scaleLinear()
    .range([200, 0])
    .domain([0, 20])

  const lineChart = line()
    .x((d, i) => x(i))
    .y(d => y(d))
    .curve(curveCardinal)

  const renderLine = () => {
    if (selection) {
      selection
        .datum(points)
        .attr("d", lineChart)
        .attr("class", "line-chart")
        .attr("transform", `translate(20, 0)`)
    }
  }

  useEffect(() => {
    if (!selection) {
      setSelection(select(lineRef.current))
    }
    renderLine()
  })
  return (
    <div className="section">
      <div className="experience-container">
        <svg width={820} height={200}>
          <path ref={lineRef} />
        </svg>
        <p>Section 2 (welcome to fullpage.js)</p>
        <button onClick={() => fullpageApi.moveSectionDown()}>
          Click me to move down
        </button>
      </div>
    </div>
  )
}

export default Experience
