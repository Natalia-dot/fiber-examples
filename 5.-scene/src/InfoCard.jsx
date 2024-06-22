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
            helper "sees" the light. Then add the helper as a child of the
            light. <br />
            In the return statement at the use effect we will deal with the
            disposal as the component unmounts. We will do that simply by
            checking if {helper} exists and thenn removing() it from the {light}
            . <br /> <br />
            Then, we have to deal with updating the helper when the {light}{' '}
            changes. We will do that by starting a use frame and checking if the{' '}
            {helper} exists. If it does, then we update() it.
            <br />
            As the last thing, we just add the reference to the {light}. The{' '}
            {helper}
            is handled in the useEffect.
          </p>
          <details>
            <summary style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Code Snippet
            </summary>
            <pre>
              <code>
                {`
const directionalLightRef = useRef()
const directionalLightHelperRef = useRef()
useEffect(() => {
  if (directionalLightRef.current) {
    directionalLightHelperRef.current = new THREE.DirectionalLightHelper(
      directionalLightRef.current,
      1
    )
    directionalLightRef.current.add(directionalLightHelperRef.current)
  }
  return () => {
    if (directionalLightHelperRef.current) {
      directionalLightRef.current.remove(directionalLightHelperRef.current)
    }
  }
}, [])
          `}
              </code>
            </pre>
          </details>
        </hgroup>
        <br />
        <br />

        <hgroup id="animations">
          <h3 className="header-left-corner">Animations</h3>
          <br />
          <p>
            There are different kinds of methods for animating items in a
            webpage through css:
          </p>
          <ul>
            <li>Animations</li>
            <li>Transitions</li>
          </ul>
          <p>
            <br />
            <b>Animations</b> usually are one way transformations. <br /> For
            example, if the animation is set to loop, we won't see this, but if
            the animation is set to only run once, the animation will finish
            back in square one: so basically the transformation is not applied
            to the object permanently. <br /> For example, say we have an item
            that we want to upscale while hovering over it, if we set the
            animation to scale it, it will increase in size as the animation
            states but as soon as the animation duration runs out, the size will
            go back to x1. <br /> <br />
            However if we use transitions, this is overridden and solved. <br />
            With transitions, the idea is that you can keep the changed state
            until the transformation finishes (when the cursor stops laying atop
            the item) and then it returns to its original state reversing the
            transition without greater effort. <br />
            The animation is done with a @keyframes rule, where you set the
            ranges for different kinds of transformations of as many properties
            as you may need. Then the name of the keyframe is logged as
            animation-name in the css class for the item that is going to have
            that animation. The animation-duration property is also needed for
            the animation to work. <br /> <br />
            The transition, however, isn't quite like that. You need to create a
            new class with the transformations to apply to the item. So in our
            case scaling, and let's also add a background color change. We would
            have to set that in the <i>::hover</i> class and then, add to the
            original class a transition property. <br />
            In the transition values, the first thing we have to do is set the
            properties that we want changed; so if we want the transition for
            all of them, the keyword "all" will do just the trick. If we want it
            to only be scaled, we can use the "transform" keyword (scaling is a
            transformation submethod), and if we only want the background-color,
            then we set "background-color". We also need to specify the
            transition duration, or it won't work, just like what happened to
            the animation.
          </p>
        </hgroup>
        <br />
        <br />
        <br />

        <hgroup id="render">
          <h3 className="header-right-corner">Too many rendered components.</h3>
          <br />
          <p>
            I had a silly little issue while adding most of the three elements
            to the canvas. <br /> The setup was that I, initially, had my Scene
            alongside my app: Everything was in the same .jsx file. <br /> This
            led to a console error saying that the elements could not be
            rendered, claiming there were too many; quite a frequent sight in
            THREE apparently. <br /> The issue ceased when I split the code into
            smaller sections (so splitting the App.jsx and creating another file
            called Scene.jsx). This effectively solved the error.
          </p>
        </hgroup>
        <br />
        <br />
        <br />

        <hgroup id="extend">
          <h3 className="header-left-corner">Extend by FIBER</h3>
          <br />
          <p>
            There will be times when you get an error: [something] does not form
            part of the jsx namespace. Did you forget to extend? <br />
            This happens when certain 3rd party elements aren't correctly
            implemented and we need to extend them so that r3f can use them
            without error. We then would need to provide the extended element
            with their proper constructor, for which we would need the original
            documentation from the third party library.
          </p>
        </hgroup>
        <br />
        <br />
        <br />

        <hgroup id="#animations">
          <h3 className="header-left-corner">CSS animations</h3>
          <br />
          <p>
            When creating the animations for the jsx elements... It was a
            nightmare. I had everything set up. My animations were correctly
            implemented but they did not show for some reason.. The reason being
            the display: none. <br /> <br />
            This happens because there is no DomElement when the display is
            none, so the classes cannot be applied properly. <br />
            <br />
            <br />
            I had an info icon that showed up first thing in the scene, and the
            goal was to make it disappear when the icon is clicked. Then another
            tab popped up, and when that tab's closing icon is clicked, then
            make it appear again.
            <br />
            We have TWO use states. One for showing the popup, and another for
            changing between the slide-in animation and the slide-out animation,
            so the animation state.
            <br />
            The first state, the popup shown, will talk about the popup being
            shown, and the second will tell what animation goes when; so when it
            is true, that means that the classname will be slide-in and when
            false, that it is slide-out.
            <br />
            The hidden popup will have a hidden hard coded class, and will
            change with the click of the info button. The buton will have a
            hardcoded flex that turns into display none when the info is shown.
            So info will be false on start (signaling that there is no info on
            display), and the animation will be true (slide-in so that onLoad
            the info icon will show the animation too.)
            <br />
            We will have the scene load. As soon as the icon loads, it will show
            the slide-in animation, because when animation is true, that is the
            animation it is set to.
            <br />
            When the icon is clicked, we have a handleClick function that will
            toggle the animation state (so it will be switched to the slide-out
            class), and we will have a timeout function that fires at the
            <b>end</b> of the animation-duration, that toggles the popup
            container and sets its display to flex and when it appears in the
            DOM, then it will have its proper class with its animation.
            <br />
            When the close button is then clicked on the popup, the animation
            fires for the popup to leave, and when it finishes, info is toggled
            to false. We have established an useEffect that states that when
            there is no info, we have a timeout that waits ten miliseconds after
            info is false and after that it adds the class to our info button,
            which toggles the slide-in animation.
          </p>
          <br />
          <br />
        </hgroup>
      </section>
    </div>
  )
}
