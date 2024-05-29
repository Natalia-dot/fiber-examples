import React, { useState } from 'react'
import { InfoCard } from './InfoCard'
import './overlay.css'

export const OVerlay = () => {
  const [info, showInfo] = useState(false)
  return (
    <div id="overlay">
      <a
        id="info"
        onClick={(e) => showInfo(true)}
        style={{ display: info && 'none' }}>
        <img alt="information about this scene" src="/img/info.png" />
      </a>
      {info && <InfoCard $showInfo={showInfo} />}
    </div>
  )
}
