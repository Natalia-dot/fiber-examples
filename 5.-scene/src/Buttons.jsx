import { useCamContext } from './context'

export const Buttons = (props) => {
  let { camPosition, setCamPosition } = useCamContext()
  const handleCamera = (type) => {
    switch (type) {
      case 1:
        setCamPosition([0, 3, -4])
        break
      case 2:
        setCamPosition([8, 1, 0])

        break
      case 3:
        setCamPosition([13, 15, -4])

        break
      case 4:
        setCamPosition([-13, 15, 8])

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
        <button className="camButton" onClick={() => handleCamera(2)}>
          Cam 1
        </button>
        <button className="camButton" onClick={() => handleCamera(3)}>
          Cam 2
        </button>
        <button className="camButton" onClick={() => handleCamera(4)}>
          Cam 3
        </button>
      </div>
    </>
  )
}
