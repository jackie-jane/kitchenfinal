
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

