import * as yup from "yup"

export const formSchema = yup.object().shape({
  clientNumber: yup
    .number("Please enter a number")
    .typeError("Please enter a number")
    .positive()
    .integer()
    .required("Required"),
  vpnProvider: yup
    .string("Please enter a VPN provider name")
    .required("Required"),
  vpnDescription: yup
    .string("Please enter a VPN description")
    .required("Required"),
  expirationDate: yup.date().required("Required"),
  startingDate: yup.date().required("Required"),
})
