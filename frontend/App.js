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

    const { fieldset,
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
      mintingfee } = e.target.elements;

    fieldset.disabled = true;

// The following commmented function is from the original tutorial
//   await guestBook.addMessage(message.value,mintingfee.value)
// The following call can uses message.value as token_id input if UUID does not work for some reason,
// token_id should be a random identifier
// The first parameter of this function should is a random UUID
    let token_id = uuidv4();

    // removed token_id from parameters to see if the bug goes away
    await guestBook.addMessage(
      numberofclients.value,
      title.value,
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
      mintingfee.value);

    const messages = await guestBook.getMessages()

    setMessages(messages);
    title.value = '';
    mintingfee.value = '0';
    fieldset.disabled = false;
    title.focus();
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
