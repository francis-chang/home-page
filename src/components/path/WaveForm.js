import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import { line } from "d3-shape"
import React from "react"

class WaveForm extends React.Component {
  svgRef = React.createRef()
  state = {
    width: 600,
  }

  resizeWidth = () => {
    if (window.innerWidth < 600) {
      this.setState({ width: window.innerWidth - 50 })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeWidth)
    this.createAudio()
  }

  createAudio = () => {
    let subsample = data => {
      let subsampleData = new Float32Array(800)
      for (let i = 0; i < 800; i++) {
        subsampleData[i] = data[Math.floor((i / 800) * data.length)]
      }
      return subsampleData
    }

    let array = new Float32Array(512)

    const node = this.svgRef.current

    let xScale = scaleLinear()
      .domain([0, 700])
      .range([0, this.state.width])

    let yScale = scaleLinear()
      .domain([-1, 1])
      .range([150, 0])

    let musicline = line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))

    select(node)
      .append("path")
      .data([array])
      .attr("d", musicline)
      .attr("fill", "none")
      .attr("stroke", "#d5d7dd")
      .attr("stroke-width", "5px")
      .attr("stroke-linecap", "round")

    let renderFrame = () => {
      requestAnimationFrame(renderFrame)
      if (this.props.analyser) {
        this.props.analyser.getFloatTimeDomainData(array)
      }
      select(node)
        .select("path")
        .datum(subsample(array))
        .attr("d", musicline)
    }
    renderFrame()
  }

  render() {
    return (
      <div>
        <svg ref={this.svgRef} width={this.state.width} height="150px"></svg>
      </div>
    )
  }
}

export default WaveForm
