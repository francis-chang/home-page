import { easeBounceOut } from "d3-ease"
import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import "./tech.css"

let points = [
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

const Tech = () => {
  const barRef = useRef(null)
  const [height, setHeight] = useState(200)
  const [width, setWidth] = useState(800)

  const y = scaleLinear()
    .range([height, 0])
    .domain([0, 20])
  const x = scaleLinear()
    .range([0, width])
    .domain([0, 20])

  const [selection, setSelection] = useState(null)

  useEffect(() => {
    if (!selection) {
      setSelection(select(barRef.current))
    }
    renderChart()
  })

  const renderChart = () => {
    if (selection) {
      selection.attr("height", height).attr("width", width)

      selection
        .selectAll("rect")
        .data(points)
        .enter()
        .append("rect")
      transitionBar()
      setInterval(transitionBar, 4500)
    }
  }

  const transitionBar = () => {
    selection
      .selectAll("rect")
      .data(points)
      .attr("x", (d, i) => x(i))
      .attr("width", `${width / 24}px`)
      .attr("fill", "#ffc970")
      .attr("y", d => y(0))
      .attr("height", 0)
      .transition()
      .delay((d, i) => i * 70)
      .ease(easeBounceOut)
      .duration(500)
      .attr("y", d => y(d))
      .attr("height", d => height - y(d))
      .transition()
      .delay(d => 2200)
      .duration(500)
      .ease(easeBounceOut)
      .attr("y", d => y(0))
      .attr("height", 0)
  }
  return (
    <div className="section">
      <div className="tech-container">
        <svg ref={barRef}></svg>
        <div className="title">tech that i have used</div>
      </div>
    </div>
  )
}

export default Tech
