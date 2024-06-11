import { createContext, useContext, useMemo, useState } from 'react'

const cameraContext = createContext()

export const CameraContextProvider = ({ children }) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(3)
  const [z, setZ] = useState(-4)

  const value = useMemo(
    () => ({
      camPosition: [x, y, z],
      setX,
      setY,
      setZ
    }),
    [x, y, z]
  )
  return (
    <cameraContext.Provider value={value}>{children}</cameraContext.Provider>
  )
}

export const useCamContext = () => useContext(cameraContext)
