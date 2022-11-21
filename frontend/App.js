import "regenerator-runtime/runtime"
import React, { useState, useEffect } from "react"
import NFTForm from "./components/Form"
import SignIn from "./components/SignIn"
import Messages from "./components/Messages"

const App = ({ isSignedIn, guestBook, wallet }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    guestBook.getMessages().then(setMessages)
  }, [])

  onSubmit = async (e) => {
    e.preventDefault()

    const {
      fieldset,
      numberofclients,
      title,
      description,
      expiresat,
      startsat,
      ipaddressrange,
      listenport,
      dns,
      postup,
      postdown,
      allowedips,
      endpoint,
      kbpersecond,
      serverprivatekey,
      implicitaccountid,
      mintingfee,
    } = e.target.elements

    fieldset.disabled = true

    // The following commmented function is from the original tutorial
    //   await guestBook.addMessage(message.value,mintingfee.value)
    // The following call can uses message.value as token_id input if UUID does not work for some reason,
    // token_id should be a random identifier
    // The first parameter of this function should is a random UUID

    // removed token_id from parameters to see if the bug goes away
    await guestBook.addMessage(
      numberofclients.value,
      title.value,
      description.value,
      expiresat.value,
      startsat.value,
      ipaddressrange.value,
      listenport.value,
      dns.value,
      postup.value,
      postdown.value,
      allowedips.value,
      endpoint.value,
      kbpersecond.value,
      serverprivatekey.value,
      implicitaccountid.value,
      mintingfee.value
    )

    const messages = await guestBook.getMessages()

    setMessages(messages)
    numberofclients.value = ""
    title.value = ""
    description.value = ""
    expiresat.value = ""
    startsat.value = ""
    ipaddressrange.value = ""
    listenport.value = ""
    dns.value = ""
    postup.value = ""
    postdown.value = ""
    allowedips.value = ""
    endpoint.value = ""
    kbpersecond.value = ""
    serverprivatekey.value = ""
    implicitaccountid.value = ""
    mintingfee.value = "0"
    fieldset.disabled = false
    title.focus()
  }

  const signIn = () => {
    wallet.signIn()
  }

  const signOut = () => {
    wallet.signOut()
  }

  return (
    <main
      className={`${
        isSignedIn
          ? "overflow-hidden   bg-cameras h-screen bg-cover bg-center bg-no-repeat"
          : ""
      } `}
    >
      <div id="bg" className="backdrop-blur-md h-full w-full">
        <div className="">
          <div
            className={` flex justify-end mx-4 ${isSignedIn ? "pt-2" : ""} `}
          >
            {/* <div>
              <h1 className="text-xl leading-normal font-bold">
                Cableguard VPN NFTC Minter{" "}
              </h1>
            </div> */}
            <div id="wallet" className="">
              {isSignedIn ? (
                // <button
                //   className="inline-flex items-center rounded-xl duration-300 ease-in-out my-1 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
                //   onClick={signOut}
                // >
                //   Log out
                // </button>

                <div
                  className="group relative  inline-block rounded-xl bg-indigo-700 px-4 py-3 text-white cursor-pointer"
                  onClick={signOut}
                >
                  <span className=" font-medium transition-opacity group-hover:opacity-0">
                    {wallet.accountId.toString()}
                  </span>

                  <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <li>
                      <a className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none">
                        <span className=" tracking-wider">Disconnect</span>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                // <button
                //   className="inline-flex  tracking-wider items-center rounded-xl duration-300 ease-in-out my-1 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
                //   onClick={signIn}
                // >
                //   Connect
                // </button>
                ""
              )}
            </div>
          </div>
        </div>
        <div
          id="content"
          className={`${isSignedIn ? "flex items-center justify-center" : ""} `}
        >
          {isSignedIn ? (
            <NFTForm onSubmit={onSubmit} currentAccountId={wallet.accountId} />
          ) : (
            <SignIn sign={signIn} />
          )}
          {!!isSignedIn && !!messages.length && (
            <Messages messages={messages} />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
