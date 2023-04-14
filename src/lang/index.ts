import en from "./en"

const Language: typeof en & {
  format?: (wording: string, args: { [k: string]: any }) => string
} = en

Language.format = (wording, args) =>
  Object.keys(args).reduce((result, k) => {
    const value = args[k]
    return result.split(`{{${k}}}`).join(value)
  }, wording)

export default Language
