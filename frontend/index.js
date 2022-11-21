// React
import React from "react"
import ReactDOM from "react-dom"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"

// NEAR
import { Contract } from "./near-interface"
import { Wallet } from "./near-wallet"

// When creating the wallet you can choose to create an access key, so the user
// can skip signing non-payable methods when talking wth the contract
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

// Abstract the logic of interacting with the contract to simplify your flow
const guestBook = new Contract({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
})

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()
  const root = ReactDOMClient.createRoot(document.getElementById("root"))
  root.render(
    <React.StrictMode>
      <App isSignedIn={isSignedIn} guestBook={guestBook} wallet={wallet} />
    </React.StrictMode>
  )
}
