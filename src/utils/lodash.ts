const deepClone = (obj: object) => JSON.parse(JSON.stringify(obj))

const Lodash = {
  deepClone,
}

export default Lodash
