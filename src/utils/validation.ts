import { Rule } from "antd/es/form"

const validateConfirmPassword: Rule = ({ getFieldValue }) => ({
  validator: (_, value) =>
    new Promise((resolve, reject) => {
      if (!value || getFieldValue("password") === value) {
        return resolve(undefined)
      }
      return reject(
        new Error("The two passwords that you entered do not match!")
      )
    }),
})

const Validation = {
  validateConfirmPassword,
}

export default Validation
