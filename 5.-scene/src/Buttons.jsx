import { useState } from 'react'
import { useCamContext } from './context'

export const Buttons = (props) => {
  let { camPosition, setCamPosition } = useCamContext()

  const [activeCam, setActiveCam] = useState(1)
  const handleCamera = (type) => {
    switch (type) {
      case 1:
        setCamPosition([0, 3, -4])
        setActiveCam(type)
        break
      case 2:
        setCamPosition([8, 1, 0])
        setActiveCam(type)

        break
      case 3:
        setCamPosition([13, 15, -4])
        setActiveCam(type)

        break
      case 4:
        setCamPosition([-13, 15, 8])
        setActiveCam(type)

        break

      default:
        break
    }
  }
  return (
    <>
      <div id="camButtonDiv" {...props}>
        <button className="camButton" onClick={() => handleCamera(1)}>
          Reset
        </button>
        <button
          className={`camButton ${activeCam == 2 ? 'activeCamButton' : ''}`}
          onClick={() => handleCamera(2)}>
          Cam 1
        </button>
        <button
          className={`camButton ${activeCam == 3 ? 'activeCamButton' : ''}`}
          onClick={() => handleCamera(3)}>
          Cam 2
        </button>
        <button
          className={`camButton ${activeCam == 4 ? 'activeCamButton' : ''}`}
          onClick={() => handleCamera(4)}>
          Cam 3
        </button>
      </div>
    </>
  )
}
