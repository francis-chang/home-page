import { easeElastic } from "d3-ease"
import { interpolate } from "d3-interpolate"
import { select } from "d3-selection"
import { arc } from "d3-shape"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import "./projects.css"

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
  const [height, setHeight] = useState(400)
  const [selection, setSelection] = useState(null)
  const [interval, setInter] = useState(null)
  const [ren, setRen] = useState(false)
  const [path, setPath] = useState(null)
  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current))
      setRen(true)
    }
    if (ren) {
      renderClock()
      setRen(false)
    }
  })
  const renderClock = () => {
    if (selection) {
      const clockArc = arc()
        .innerRadius(width / 6.5 - 60)
        .outerRadius(width / 6.5 - 5)
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
        label.text(d => d.value + d.label)
      }
      setInter(setInterval(update, 1000))
    }
  }

  return (
    <div className="section">
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default Projects
