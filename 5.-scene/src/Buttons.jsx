import { useCamContext } from './context'

export const Buttons = () => {
  let { setX } = useCamContext()
  const handleCamera = () => {
    setX((prev) => prev + 5)
  }
  return (
    <>
      <button
        style={{ position: 'absolute', top: '100px' }}
        onClick={handleCamera}>
        Move left
      </button>
    </>
  )
}
