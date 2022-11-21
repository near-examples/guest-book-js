import * as yup from "yup"

export const formSchema = yup.object().shape({
  initialIPv4: yup.string("Please enter a valid IPv4.").required("Required"),
  IPv4Address: yup
    .string()
    .matches(
      /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      "Please enter valid IPv4 address"
    )
    .required("Required"),
  maximumKb: yup
    .number("Please enter a number.")
    .typeError("Please enter a number")
    .positive()
    .integer()
    .required("Required"),
  privateKey: yup
    .string()
    // .matches(
    //   /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
    //   "Please enter valid base64 value"
    // )
    .required("Required"),
  account: yup.string().required("Required"),
})
