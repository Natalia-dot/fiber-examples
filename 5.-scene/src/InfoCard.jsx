import React, { useEffect, useState } from 'react'

export const InfoCard = ({ $showInfo }) => {
  const [animate, setAnimate] = useState(false)

  const handleClose = () => {
    setAnimate(false)
    setTimeout(() => $showInfo(false), 2000)
  }

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 10)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      id="infoCard"
      className={animate ? 'show-card-animation' : 'hide-card-animation'}>
      <hgroup id="hgroup-1">
        <h1 style={{ padding: '15px 0' }}>This is a prefabricated scene.</h1>
        <p style={{ fontSize: '24px', width: '80%' }}>
          Today I learned about how to make instances for THREE and how to
          incorporate them into the render loop. I also had some silly trouble
          with the cursor again, and all will be explained further in the
          paragraphs to come. This is merely a way for me to assemble my
          thoughts and what I have learnt today. Without further ado, let me
          begin.
        </p>
        <br />
        <hr />
      </hgroup>
      <section id="summary">
        <h3>
          <a href="#pointer">Pointer trouble</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#updating">Updating objects with instances tied to them</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#animations">Animations</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#render">Too many rendering components</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#extend">"Extend" by FIBER</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
      </section>
      <section>
        <hgroup name="#pointer"></hgroup>
        <hgroup name="#updating"></hgroup>
        <hgroup name="#animations"></hgroup>
        <hgroup name="#render"></hgroup>
        <hgroup name="#extend"></hgroup>
      </section>
      <a id="infoCardClick" onClick={handleClose}>
        <img src="/img/close.png" alt="closing icon" />
      </a>
    </div>
  )
}
