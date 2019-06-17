import { library } from "@fortawesome/fontawesome-svg-core"
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useRef, useState } from "react"
import audio from "../../audio/make.mp3"
import "./path.css"
import WaveForm from "./WaveForm"

library.add(faPlay, faPause)

const Audio = ({ fullpageApi }) => {
  const [audioSet, setAudioSet] = useState(false)
  const [analyser, setAnalyser] = useState(null)
  const [isPlaying, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("0:00")
  const audioRef = useRef(null)
  let interval = null

  const initializeAudio = () => {
    let context = new AudioContext()
    let analyser = context.createAnalyser()
    let audioSrc = context.createMediaElementSource(audioRef.current)
    audioSrc.connect(analyser)
    analyser.connect(context.destination)
    analyser.fftSize = 512
    setAnalyser(analyser)
  }

  const play = () => {
    if (!audioSet) {
      initializeAudio()
      setAudioSet(true)
      audioRef.current.volume = 0.5
    }
    audioRef.current.play()
    setPlaying(true)
    interval = window.setInterval(turnToTime, 1000)
  }

  const pause = () => {
    audioRef.current.pause()
    setPlaying(false)
    window.clearInterval(interval)
  }

  const turnToTime = () => {
    if (
      audioRef.current &&
      audioRef.current.currentTime >= audioRef.current.duration
    ) {
      pause()
      audioRef.current.currentTime = 0
    }
    let roundedSec = Math.round(audioRef.current.currentTime)
    let minutes = Math.floor(roundedSec / 60)
    let sec = roundedSec % 60
    if (sec === 0) {
      sec = "00"
    } else if (sec < 10) {
      sec = `0${sec}`
    }
    setCurrentTime(`${minutes}:${sec}`)
  }

  return (
    <div className="section">
      <div className="container">
        <div className="item_container">
          <div className="time">{currentTime}</div>
          <audio
            data-keepplaying
            ref={audioRef}
            id="audioElement"
            src={audio}
          />
          <WaveForm analyser={analyser} />
          <button onClick={isPlaying ? pause : play} className="media_button">
            <FontAwesomeIcon
              className="fa-icon"
              icon={isPlaying ? "pause" : "play"}
              style={!isPlaying && { paddingLeft: "0.4rem" }}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Audio
