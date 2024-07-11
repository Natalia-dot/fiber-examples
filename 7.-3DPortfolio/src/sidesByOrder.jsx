const sidesByOrder = (item) => {
  ref.current.geometry.computeBoundingBox()
  const boundingBox = ref.current.geometry.boundingBox
  const { min, max } = item.geometry.boundingBox
  const xSpace = max.x - min.x
  const ySpace = max.y - min.y
  const zSpace = max.z - min.z

  if (xSpace >= ySpace && xSpace >= zSpace) {
    if (ySpace >= zSpace) {
      targetRotation = [0, 0, 0]
    } else {
      targetRotation = [degToRad(90), 0, 0]
    }
  } else if (ySpace >= xSpace && ySpace >= zSpace) {
    if (xSpace >= zSpace) {
      targetRotation = [0, 0, degToRad(90)]
    } else {
      targetRotation = [degToRad(90), 0, degToRad(90)]
    }
  } else if (zSpace >= xSpace && zSpace >= ySpace) {
    if (xSpace >= ySpace) {
      targetRotation = [degToRad(90), degToRad(90), 0]
    } else {
      targetRotation = [degToRad(90), degToRad(90), 0]
    }
  }

  return targetRotation
}
