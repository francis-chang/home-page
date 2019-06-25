import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { easeElastic } from "d3-ease"
import { interpolate } from "d3-interpolate"
import { select } from "d3-selection"
import { arc } from "d3-shape"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import "./projects.css"

library.add(faArrowDown, faArrowUp)

let fields = [
  {
    value: 24,
    size: 24,
    label: "h",
    update: function(date) {
      return date.getHours()
    },
  },
  {
    value: 60,
    size: 60,
    label: "m",
    update: function(date) {
      return date.getMinutes()
    },
  },
  {
    value: 60,
    size: 60,
    label: "s",
    update: function(date) {
      return date.getSeconds()
    },
  },
]

const Projects = () => {
  const svgRef = useRef(null)
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(200)
  const [selection, setSelection] = useState(null)
  const [interval, setInter] = useState(null)
  const [ren, setRen] = useState(false)
  useEffect(() => {
    const resize = () => {
      if (interval) {
        clearInterval(interval)
      }
      if (window.innerWidth > 800) {
        setWidth(800)
        setRen(true)
      } else {
        setWidth(window.innerWidth * 0.8)
        setRen(true)
      }
    }
    if (!selection) {
      setSelection(select(svgRef.current))
      window.addEventListener("resize", resize)
      setRen(true)
    }
    if (ren) {
      renderClock()
      setRen(false)
    }
  })
  const renderClock = () => {
    if (selection) {
      if (interval) {
        clearInterval(interval)
      }
      selection.selectAll("*").remove()
      for (let x = 0; x < fields.length; x++) {
        if (x === 0) {
          fields[x].value = 24
        } else {
          fields[x].value = 60
        }
      }

      const clockArc = arc()
        .innerRadius(width / 8 - 25)
        .outerRadius(width / 8 - 5)
        .startAngle(0)
        .endAngle(d => (d.value / d.size) * 2 * Math.PI)

      selection.attr("width", width).attr("height", height)

      let field = selection
        .selectAll(".field")
        .data(fields)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${((i * 2 + 1.25) / 6.5) * width}, ${height / 2})`
        )
        .attr("class", "field")

      field
        .append("path")
        .attr("class", "path path--background")
        .attr("d", clockArc)

      let path = field.append("path").attr("class", "path path--foreground")

      let label = field
        .append("text")
        .attr("class", "label")
        .attr("font-size", "70px")
        .attr("dy", ".35em")

      function arcTween(b) {
        var i = interpolate({ value: b.previous }, b)
        return function(t) {
          return clockArc(i(t))
        }
      }

      const update = () => {
        let now = new Date()
        field.each(d => {
          d.previous = d.value
          d.value = d.update(now)
        })

        path
          .transition()
          .ease(easeElastic)
          .duration(750)
          .attrTween("d", arcTween)
        label.text(d => d.value)
      }
      setInter(setInterval(update, 1000))
      update()
    }
  }

  return (
    <div className="section">
      <div className="projects-container">
        <svg ref={svgRef}></svg>
        <div className="projects-list-container">
          <div name="poll" className="projects-listing">
            poll <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
          </div>
          <div name="audio" className="projects-listing">
            audio visualizer
            <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
          </div>
          <div name="shipment" className="projects-listing">
            shipment tracker{" "}
            <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
          </div>
          <div name="clone" className="projects-listing">
            instagram clone{" "}
            <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
