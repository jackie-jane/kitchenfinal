import { randomClassBackground } from './BackgroundServices'
import { randomInt } from './Services'

export const iterateOnClick = (nextValue, finalArr, userArr) => {
  let value = nextValue;
  let newUpArr = userArr
  let newFinArr = finalArr;
  let newCurrent = userArr[0]
  newUpArr.shift()
  newFinArr.push(value)
  return { newCurrent: newCurrent, newFinalArray: newFinArr, newUpcomingArray: newUpArr }
}

export const bodyClick = (e, renderArray) => {
  const batches = ['A', 'A', 'A', 'B', 'B', 'C', 'C']
  let batch = batches[Math.floor(Math.random() * batches.length)]
  let rc = randomClassBackground()
  let file = pickFile(batch)
  let finalArr = renderArray
  let imgInfo = {
    'class': `A${rc}`,
    'url': `media/${batch}/${file}.gif`,
    'x': e.pageX,
    'y': e.pageY,
    'transform': 'none'
  }
  finalArr.push(imgInfo)
  return finalArr;
}

export const pickFile = (b) => {
  let batch = b
  let file = ''
  if (batch === 'A') {
    file = Math.floor(Math.random() * 30)
  } else if (batch === 'B') {
    file = Math.floor(Math.random() * 43)
  } else {
    file = Math.floor(Math.random() * 24)
  }
  return file
}

export const audioPlay = (boolean) => {
  let file = Math.floor(Math.random() * 8)
  if (boolean === true) {
    return false
  } else {
    return { boolean: true, audioFile: file }
  }
}

export const gifResize = (renderArray) => {
  let imgArray = renderArray
  if (imgArray.length > 0) {
    imgArray.forEach(el => {
      let newClass = randomClassBackground()
      let rand = Math.random() < 0.5
      if (rand === true) {
        el.class = newClass
      } else {
        el.class = `A${newClass}`
      }
    })
    return imgArray
  }
}

export const flipGif = (renderArray) => {
  let imgArray = renderArray
  if (imgArray.length > 0) {
    imgArray.forEach(el => {
      let rotate = randomInt(360)
      let rand = Math.random() < 0.5
      if (rand === true) {
        el.transform = `rotate(${rotate}deg)`
      }
    })
    return imgArray
  }
}

export const additionalMethods = () => {
  const methods = [1, 2]
  let method = methods[Math.floor(Math.random() * methods.length)]
  return method
}