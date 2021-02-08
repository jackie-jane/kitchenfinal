
export const ArrayBuilder = (n, batch, total) => {
  let final = []
  let firstArr = Array.from({ length: total },
    () => Math.floor(Math.random() * n))
  firstArr.forEach(el => {
    final.push(`media/${batch}/${el}.gif`)
  })
  return final
}

export const iterateArray = (u, r, c) => {
  let current = c
  let upcoming = u
  let render = r
  upcoming.push(current)
  current = upcoming[0]
  render = render.push(current)
  upcoming.shift()
  return { render, upcoming, current }
}

export const randomClass = () => {
  let randomClass = Math.floor(Math.random() * 26)
  switch (randomClass) {
    case 0:
      randomClass = "zero";
      break;
    case 1:
      randomClass = "one";
      break;
    case 2:
      randomClass = "two";
      break;
    case 3:
      randomClass = "three";
      break;
    case 4:
      randomClass = "four";
      break;
    case 5:
      randomClass = "five";
      break;
    case 6:
      randomClass = "six";
      break;
    case 7:
      randomClass = "seven";
      break;
    case 8:
      randomClass = "eight";
    case 9:
      randomClass = "nine";
      break;
    case 10:
      randomClass = "ten";
      break;
    case 11:
      randomClass = "eleven";
      break;
    case 12:
      randomClass = "twelve";
      break;
    case 13:
      randomClass = "thirteen";
      break;
    case 14:
      randomClass = "fourteen";
      break;
    case 15:
      randomClass = "fifteen";
      break;
    case 16:
      randomClass = "seventeen";
      break;
    case 17:
      randomClass = "eighteen";
      break;
    case 18:
      randomClass = "nineteen";
      break;
    case 19:
      randomClass = "twenty";
      break;
    case 20:
      randomClass = "twentyone";
      break;
    case 21:
      randomClass = "twentytwo";
      break;
    case 22:
      randomClass = "twentythree";
      break;
    case 23:
      randomClass = "twentyfour";
      break;
    case 24:
      randomClass = "twentyfive";
      break;
    case 25:
      randomClass = "sixteen";
      break;
  }
  return randomClass
}