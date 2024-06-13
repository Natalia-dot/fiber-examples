import { createContext, useContext, useMemo, useState } from 'react'

const cameraContext = createContext()

export const CameraContextProvider = ({ children }) => {
  const [camPosition, setCamPosition] = useState([0, 3, -4])

  const value = useMemo(
    () => ({
      camPosition,
      setCamPosition
    }),
    [camPosition]
  )
  return (
    <cameraContext.Provider value={value}>{children}</cameraContext.Provider>
  )
}

export const useCamContext = () => useContext(cameraContext)
