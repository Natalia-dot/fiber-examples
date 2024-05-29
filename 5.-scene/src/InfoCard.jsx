import React from 'react'

export const InfoCard = ({ $showInfo }) => {
  return (
    <>
      <div id="infoCard">
        <h1>This is a prefabricated scene.</h1>
        <a
          id="infoCardClick"
          onClick={(e) => {
            $showInfo(false)
          }}>
          <img src="/img/close.png" alt="closing icon" />
        </a>
      </div>
    </>
  )
}
