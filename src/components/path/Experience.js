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
  const [width, setWidth] = useState(window.innerWidth * 0.4)
  const [height, setHeight] = useState(150)

  const lineRef = useRef(null)
  const x = scaleLinear()
    .range([0, width])
    .domain([0, 20])

  const y = scaleLinear()
    .range([height, 0])
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
      if (window.innerWidth * 0.6 > 800) {
        setWidth(800)
      } else {
        setWidth(window.innerWidth * 0.6)
      }
      if (window.innerWidth < 800) {
        setHeight(100)
      } else {
        setHeight(150)
      }
      setSelection(select(lineRef.current))
      select(window).on("resize", () => {
        if (window.innerWidth * 0.6 > 800) {
          setWidth(800)
        } else {
          setWidth(window.innerWidth * 0.6)
        }
        if (window.innerWidth < 800) {
          setHeight(100)
        } else {
          setHeight(200)
        }
      })
    }
    renderLine()
  })
  return (
    <div className="section">
      <div className="experience-container">
        <svg width={width + 20} height={height}>
          <path ref={lineRef} className="path" />
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
