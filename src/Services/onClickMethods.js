import {randomClassBackground} from './BackgroundServices'
export const iterateOnClick = (nextValue, finalArr, userArr) => {
  let value = nextValue;
  let newUpArr = userArr
  let newFinArr = finalArr;
  let newCurrent = userArr[0]
  newUpArr.shift()
  newFinArr.push(value)
  return { newCurrent: newCurrent, newFinalArray: newFinArr, newUpcomingArray: newUpArr }
}

export const bodyClick = () => {
  const batches = ['A', 'A', 'A', 'B', 'B', 'C']
  let batch = batches[Math.floor(Math.random() * batches.length)]
  let rc = randomClassBackground()
  let file = ''
  if (batch === 'A') {
    file = Math.floor(Math.random() * 30)
  } else if (batch === 'B') {
    file = Math.floor(Math.random() * 43)
  } else {
    file = Math.floor(Math.random() * 24)
  }
  return { batch: batch, rc: rc, file: file }
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
