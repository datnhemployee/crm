const ascendingString = (source: string, dest: string) =>
  source.length - dest.length

const descendingBoolean = (source: boolean, dest: boolean) => {
  switch (true) {
    case source && dest:
      return 0
    case source:
      return 1
    case dest:
      return -1
    default:
      return 0
  }
}
const Compare = {
  ascendingString,
  descendingBoolean,
}

export default Compare
