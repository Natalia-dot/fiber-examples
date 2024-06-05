import React, { useEffect, useState } from 'react'
import { InfoCard } from './InfoCard'
import './overlay.css'

export const OVerlay = () => {
  const [info, showInfo] = useState(false)

  const [animateInfoIcon, setAnimateInfoIcon] = useState(true)

  useEffect(() => {
    if (!info) {
      // Re-enable the animation when info is false
      setTimeout(() => setAnimateInfoIcon(true), 10)
    }
  }, [info])

  const handleShowInfo = () => {
    setAnimateInfoIcon(false)
    setTimeout(() => showInfo(true), 1000)
  }

  return (
    <div id="overlay">
      <a
        id="info"
        onClick={handleShowInfo}
        className={
          animateInfoIcon ? 'slide-in-animation' : 'slide-out-animation'
        }
        style={{ display: info ? 'none' : 'flex' }}>
        <img alt="information about this scene" src="/img/info.png" />
      </a>
      {info && <InfoCard $showInfo={showInfo} $showIcon={setAnimateInfoIcon} />}
    </div>
  )
}
