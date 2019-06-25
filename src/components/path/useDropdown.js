import { useState } from "react"

export const useDropDown = initialValues => {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target[name]]: !values[e.target[name]],
      })
    },
  ]
}
