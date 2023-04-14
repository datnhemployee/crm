const delay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const Promisy = {
  delay,
}

export default Promisy
