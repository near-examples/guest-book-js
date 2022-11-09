import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';
// Import UUID library
import {v4 as uuidv4} from 'uuid';

const App = ({ isSignedIn, guestBook, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    guestBook.getMessages().then(setMessages);
  }, []);

  onSubmit = async (e) => {
    e.preventDefault();

    // The message variable below should probably be changed to title for alignment with metadata.js
    const { fieldset,
      numberofclients,
      message,
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
      mintingfee } = e.target.elements;

    fieldset.disabled = true;

// The following commmented function is from the original tutorial
//   await guestBook.addMessage(message.value,mintingfee.value)
// The following call can uses message.value as token_id input if UUID does not work for some reason,
// token_id should be a random identifier
// The first parameter of this function should is a random UUID
    let token_id = uuidv4();

    await guestBook.addMessage(
      numberofclients.value,
      token_id,
      message.value,
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
      mintingfee.value)

    const messages = await guestBook.getMessages()

    setMessages(messages);
    message.value = '';
    mintingfee.value = '0';
    fieldset.disabled = false;
    message.focus();
  };

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }

  return (
    <main>
      <table>
        <tr>
          <td><h1>Cableguard VPN NFTC Minter </h1></td>
          <td>{ isSignedIn
          ? <button onClick={signOut}>Log out</button>
          : <button onClick={signIn}>Log in</button>
        }</td>
        </tr>
      </table>

      <hr />
      { isSignedIn
        ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
        : <SignIn/>
      }
      { !!isSignedIn && !!messages.length && <Messages messages={messages}/> }
    </main>
  );
};

export default App;
