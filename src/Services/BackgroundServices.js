export const randomClassBackground = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export const createKeyArr = (prefix) => {
  const list = Array.from(Array(50).keys());
  let keyList = []
  list.forEach(el => {
    keyList.push(`${prefix}${el}`)
  })
  return keyList
}

export const updateRender = (multiplier, uArray, renderArr) => {
  let ntbr = Math.ceil((Math.random() * 3)) + multiplier
  let newU = uArray
  let final = renderArr
  while (ntbr > 1) {
    let url = Math.floor(Math.random() * 8)
    let rc = randomClassBackground()
    let imageInfo = {
      'id': newU[0],
      'url': `media/Black/${url}.gif`,
      'size': rc
    }
    final.push(imageInfo)
    newU.shift()
    ntbr -= 1
  }
  return { 'final': final, 'keyList': newU, 'multiplier': ntbr }
}

