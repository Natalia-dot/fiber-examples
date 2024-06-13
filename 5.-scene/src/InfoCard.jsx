import React, { useEffect, useState } from 'react'

let helper = <span style={{ backgroundColor: '#adec89' }}>Light Helper</span>
let light = (
  <span style={{ backgroundColor: '#ece689' }}>Directional Light</span>
)

export const InfoCard = ({ $showInfo, $showIcon }) => {
  const [animate, setAnimate] = useState(false)

  const handleClose = () => {
    $showIcon(true)
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
      <a id="infoCardClick" onClick={handleClose}>
        <img src="/img/close.png" alt="closing icon" />
      </a>{' '}
      {
        //this has to go in this part of the document so that the sticky positioning works!
        //it gets the first ancestor it can find, so it was using one of the sections as the ancestor,
        //which made the position stay at the very bottom
      }
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
          <a href="#render">Too many rendering components</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#extend">"Extend" by FIBER</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
        <h3>
          <a href="#animations">CSS animations</a>
          <span className="material-symbols-outlined">arrow_downward</span>
        </h3>
      </section>
      <section>
        <hgroup id="pointer">
          <h3 className="header-left-corner">Pointer trouble</h3>
          <br />
          <p>
            This is something that commonly happens to me when trying to set a
            different pointer over a certain place. Firstly, it is important to
            note that the icons can be 30x30 maximum. Any resolution over that
            will result in the icon, obviously, not showing.
            <br /> Secondly, the syntax. I tend to recall the property being
            pointer, but against all odds, it is in fact <b>cursor</b>. <br />
            <br />
            Then you add the url('/img/wherever.png') (this has no relative
            directory; because everything is then outputted to /public, the
            folder only need be its name), then optionally the "offset" (with a
            square image, the corner of the image that tends to have white space
            will be shown as the cursor hotspot, the clicking item. To fix that,
            we simply adjust the coordinates for x and y that come from the top
            left corner.) .<br />
            And lastly under which circumstances the cursor will have this new
            appearance. Say for example that you place auto as this keyword.
            This would mean that what cursor to show depends on the context
            (like a bar showing over text).
            <br />
            <br />
            <b>
              BUT! Most important of all and what has prompted endless
              headaches!
            </b>
            <br />
            <br />
            The url() (+ optionally offset coordinates) have to be separated by
            the rest of the properties by <b>A COMMA!</b>.
            <br />
            <code> cursor: url('/img/pointerr.png') 15 15, auto;</code>
            <br />
            Seriously! Enough mental fog for Morla to live in my head!
          </p>
        </hgroup>
        <br />
        <br />
        <br />
        <br />
        <hgroup id="updating">
          <h3 className="header-right-corner">
            Updating objects with instances.
          </h3>
          <br />
          <p>
            Probably the lengthiest one, in my honest opinion. We got in touch
            with <b>instances</b> and the way we have to update them.
            <br />
            So to settle the context of our problem, the issue was that I wanted
            to have a directionalLightHelper. DirectionalLightHelper has, as an
            argument, the light it's gonna help. I tried passing it through
            props with hyphens (which did not work), I tried creating a jsx
            element (extending) with the helper, and ironically, that didn't
            help either. The issue, too, was that I needed to update the helper
            when I changed the light's position. This all will be discussed
            below.
            <br />
            We have the
            <span style={{ backgroundColor: '#ece689' }}>
              Directional Light
            </span>
            and we have the
            <span style={{ backgroundColor: '#adec89' }}>
              Directional Light Helper
            </span>
            . The main problem we have had is that the light wasn't yet rendered
            when I wanted to add the helper, so I had to manage with a use
            effect. What we need to do it:
          </p>
          <ul>
            <li>Check if there is a {light}</li>
            <li>
              If there is, add the {helper} to the {light}
            </li>
          </ul>
          <p>
            As you have probably seen, we still have the issue of... Well, we
            can't reference the {light} because we don't have an item, only a
            jsx element which we can't make reference to. So we have to add a
            ref to the {light} jsx beforehand, as well as for the {helper}. We
            now have a ref to both {light} and {helper}. With that we are going
            to, in a use effect: <br />
            Check if the {light} exists (lightRef.current) and if it does, make
            a new instance of the {helper} with the {light} ref, so that the
            helper "sees" the light. Then just add the helper as a child of the
            light
          </p>
        </hgroup>
        <br />
        <br />
        <br />
        <br />

        <hgroup id="animations">
          <h3>Animations</h3>
        </hgroup>
        <br />
        <br />
        <br />
        <br />

        <hgroup id="render">
          <h3>Too many rendered components.</h3>
        </hgroup>
        <br />
        <br />
        <br />
        <br />

        <hgroup id="extend">
          <h3>Extend by FIBER</h3>
        </hgroup>
        <br />
        <br />
        <br />
        <br />

        <hgroup id="#animations">
          <h3>CSS animations</h3>
        </hgroup>
      </section>
    </div>
  )
}
