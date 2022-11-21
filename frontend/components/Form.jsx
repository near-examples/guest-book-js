import React, { useState } from "react"
import PropTypes from "prop-types"
import { Field, Form, Formik } from "formik"
import { Input } from "./Input"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import { Step } from "./Step"
import { Modal } from "./Modal"

// nft_mint field token_id is a generated UUID
// nft_mint field title is entered as the parameter message for the time being

const todayDate = () => {
  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = date.getMonth() + 1
  let currentYear = date.getFullYear()
  return (
    currentYear +
    "-" +
    (currentMonth < 10 ? "0" + currentMonth : currentMonth) +
    "-" +
    (currentDate < 10 ? "0" + currentDate : currentDate)
  )
}
const nextYearDate = () => {
  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = date.getMonth() + 1
  let currentYear = date.getFullYear() + 1
  return (
    currentYear +
    "-" +
    (currentMonth < 10 ? "0" + currentMonth : currentMonth) +
    "-" +
    (currentDate < 10 ? "0" + currentDate : currentDate)
  )
}

export default function NFTForm({ currentAccountId }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState({
    clientNumber: "",
    vpnProvider: "",
    vpnDescription: "",
    expirationDate: nextYearDate(),
    startingDate: todayDate(),
    ipv4Addresses: "",
    vpnPorts: "",
    dnsServerIp: "",
    postUpVpn:
      "iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
    postDownVpn:
      "iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE",
    initialIPv4: "",
    maximumKb: "",
    privateKey: "",
    account: "",
  })

  const handleNextStep = (enteredData, final = false) => {
    setData((prevState) => ({ ...prevState, ...enteredData }))

    if (final) {
      console.log("form submitted")
      console.log("data", enteredData)
      setIsModalOpen(true)
      return
    }

    setCurrentStep((prevState) => prevState + 1)
  }
  const handlePrevStep = (enteredData) => {
    setData((prevState) => ({ ...prevState, ...enteredData }))

    setCurrentStep((prevState) => prevState - 1)
  }

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ]

  return (
    <div className="flex  flex-col w-fit px-6 pt-2 pb-8 items-center justify-center rounded-xl border bg-slate-100 border-gray-100 shadow-xl">
      {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <div className="">
        <h1 className="text-2xl tracking-wide font-semibold py-3">
          Cableguard NFTC
        </h1>
      </div>
      <div className="flex flex-col items-center  justify-center">
        <Step current={currentStep} />
        <div className="flex items-center mt-4 justify-center ">
          {steps[currentStep]}
        </div>
      </div>
    </div>
    // <form className="flex flex-col">
    //   <div id="fieldset">
    //     <p className="text-2xl">
    //       Please enter Cableguard configuration parameters and double check for
    //       typos, {currentAccountId}!
    //     </p>
    //     <p>Number of clients</p>
    //     <p className="highlight">
    //       <label htmlFor="numberofclients">Number</label>
    //       <input autoComplete="off" autoFocus id="numberofclients" required />
    //     </p>
    //     <p>VPN Provider</p>
    //     <p className="highlight">
    //       <label htmlFor="title">Name of the Provider</label>
    //       <input autoComplete="off" autoFocus id="title" required />
    //     </p>
    //     <p>VPN Service Description</p>
    //     <p className="highlight">
    //       <label htmlFor="description">Brief description</label>
    //       <input autoComplete="off" autoFocus id="description" required />
    //     </p>
    //     <p>Date of Expiration of VPN Service</p>
    //     <p className="highlight">
    //       <label htmlFor="expiresat">DD/MM/YYYY</label>
    //       <input autoComplete="off" autoFocus id="expiresat" required />
    //     </p>
    //     <p>Date of Start of VPN Service</p>
    //     <p className="highlight">
    //       <label htmlFor="startsat">DD/MM/YYYY</label>
    //       <input autoComplete="off" autoFocus id="startsat" required />
    //     </p>
    //     <p>IPv4 addresses range of the VPN clients</p>
    //     <p className="highlight">
    //       <label htmlFor="ipaddressrange">IPv4 CIDR notation</label>
    //       <input autoComplete="off" autoFocus id="ipaddressrange" required />
    //     </p>
    //     <p>Port where the VPN server listens</p>
    //     <p className="highlight">
    //       <label htmlFor="listenport">Port number</label>
    //       <input autoComplete="off" autoFocus id="listenport" required />
    //     </p>
    //     <p>DNS server IPv4 address</p>
    //     <p className="highlight">
    //       <label htmlFor="dns">IPv4 address</label>
    //       <input autoComplete="off" autoFocus id="dns" required />
    //     </p>
    //     <p>Post Up command for the VPN server</p>
    //     <p className="highlight">
    //       <label htmlFor="postup">
    //         e.g. iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A
    //         POSTROUTING -o eth0 -j MASQUERADE
    //       </label>
    //       <input autoComplete="off" autoFocus id="postup" required />
    //     </p>
    //     <p>Post Down command for the VPN server</p>
    //     <p className="highlight">
    //       <label htmlFor="postdown">
    //         e.g. iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D
    //         POSTROUTING -o eth0 -j MASQUERADE
    //       </label>
    //       <input autoComplete="off" autoFocus id="postdown" required />
    //     </p>
    //     <p>IPv4 addresses accessible by the VPN clients</p>
    //     <p className="highlight">
    //       <label htmlFor="allowedips">IPv4 range accessible</label>
    //       <input autoComplete="off" autoFocus id="allowedips" required />
    //     </p>
    //     <p>IPv4 address of the VPN server where the clients connect</p>
    //     <p className="highlight">
    //       <label htmlFor="endpoint">IPv4 address</label>
    //       <input autoComplete="off" autoFocus id="endpoint" required />
    //     </p>
    //     <p>Maximum Kb per second of each VPN connection</p>
    //     <p className="highlight">
    //       <label htmlFor="kbpersecond">Number of Kb</label>
    //       <input autoComplete="off" autoFocus id="kbpersecond" required />
    //     </p>
    //     <p>Private key of the server for signatures in Base64</p>
    //     <p className="highlight">
    //       <label htmlFor="serverprivatekey">Private key in Base64</label>
    //       <input autoComplete="off" autoFocus id="serverprivatekey" required />
    //     </p>
    //     <p>Implicit account of the server in HEX</p>
    //     <p className="highlight ">
    //       <label htmlFor="implicitaccountid">
    //         You MUST pre-initialize the Implicit account with some NEAR before
    //       </label>
    //       <input autoComplete="off" autoFocus id="implicitaccountid" required />
    //     </p>
    //     <p>
    //       <label htmlFor="mintingfee">
    //         NFTC Minting Fee per each client, plus 1 for server
    //       </label>
    //       <input
    //         autoComplete="off"
    //         defaultValue={"1"}
    //         id="mintingfee"
    //         min="0.5"
    //         step="0.1"
    //         type="number"
    //       />
    //       <span title="NEAR Tokens">Ⓝ</span>
    //     </p>
    //     <button type="submit">Mint</button>
    //   </div>
    // </form>
  )
}

// Form.propTypes = {
//   // onSubmit: PropTypes.func.isRequired,
//   currentUser: PropTypes.shape({
//     accountId: PropTypes.string.isRequired,
//     balance: PropTypes.string.isRequired,
//   }),
// }
