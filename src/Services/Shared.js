export const ArrayBuilder = (n, batch, total) => {
  let final = []
  let t = total
  while (t > 1) {
    let randomInt = Math.floor(Math.random() * n)
    final.concat([`media/${batch}/${randomInt}.gif`])
    t--
  }
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