import * as yup from "yup"

export const formSchema = yup.object().shape({
  ipv4Addresses: yup
    .string("Please enter a valid IPv4 address")
    .matches(
      /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      "Please enter valid IPv4 address range"
    )
    .required(),
  vpnPorts: yup
    .number()
    .typeError("Please enter a number")
    .positive()
    .integer()
    .required("Required"),
  dnsServerIp: yup
    .string("Please enter a valid DNS server IP")
    .matches(
      /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      "Please enter valid IPv4 address"
    )
    .required("Required"),
  postUpVpn: yup
    .string("Please enter valid Post Up VPN command.")
    .required("Required"),
  postDownVpn: yup
    .string("Please enter valid Post Down VPN command.")
    .required("Required"),
})
