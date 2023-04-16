const deepClone = <O extends Object>(obj: O): O =>
  JSON.parse(JSON.stringify(obj))

const Lodash = {
  deepClone,
}

export default Lodash
