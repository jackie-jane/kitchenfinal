export const createArray = (amountOfEl) => {
  let newArray = Array.from({ length: amountOfEl },
    () => Math.floor(Math.random() * 47))
  let currentNum = newArray[0]
  newArray.shift()
  return { 'newArray': newArray, 'currentNum': currentNum }
}

export const randomInt = (n) => {
  let randomInt = Math.floor(Math.random() * n)
  return randomInt
}