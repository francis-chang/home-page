import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { easeBounceOut } from "d3-ease"
import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import "./tech.css"

library.add(faArrowDown)

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
  const [set, setSet] = useState(false)

  const [jsToggle, setJsToggle] = useState(false)
  const [rToggle, setRToggle] = useState(false)
  const [pToggle, setPToggle] = useState(false)
  const [cToggle, setCToggle] = useState(false)

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
      setSet(true)
    }
    if (set) {
      renderChart()
      setSet(false)
    }
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
  const jsAniamte = useSpring({
    height: jsToggle ? "10rem" : "0rem",
  })
  const rAnimate = useSpring({
    height: rToggle ? "10rem" : "0rem",
  })
  const pAnimate = useSpring({
    height: pToggle ? "10rem" : "0rem",
  })
  const cAnimate = useSpring({
    height: cToggle ? "10rem" : "0rem",
  })

  const jsClick = () => {
    if (rToggle) {
      setRToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setJsToggle(!jsToggle)
  }

  const rClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setRToggle(!rToggle)
  }

  const pClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (rToggle) {
      setRToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    setPToggle(!pToggle)
  }

  const cClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (rToggle) {
      setRToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setCToggle(!cToggle)
  }
  return (
    <div className="section">
      <div className="tech-container">
        <svg ref={barRef}></svg>
        <div className="title">tech that i have used</div>
        <div className="accordion-container">
          <div className="accordion-head" onClick={jsClick}>
            javascript{" "}
            <FontAwesomeIcon className="arrow-icon" icon="arrow-down" />
          </div>
          <animated.div style={jsAniamte} />
          <div className="accordion-head" onClick={rClick}>
            react
            <FontAwesomeIcon className="arrow-icon" icon="arrow-down" />
          </div>
          <animated.div style={rAnimate} />
          <div className="accordion-head" onClick={pClick}>
            python
            <FontAwesomeIcon className="arrow-icon" icon="arrow-down" />
          </div>
          <animated.div style={pAnimate} />
          <div className="accordion-head" onClick={cClick}>
            cloud
            <FontAwesomeIcon className="arrow-icon" icon="arrow-down" />
          </div>
          <animated.div style={cAnimate} />
        </div>
      </div>
    </div>
  )
}

export default Tech
