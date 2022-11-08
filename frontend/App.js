import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';

const App = ({ isSignedIn, guestBook, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    guestBook.getMessages().then(setMessages);
  }, []);

  onSubmit = async (e) => {
    e.preventDefault();

    const { fieldset, message, description, expiresat, startsat, ipaddressrange, listenport, dns, postup, postdown, allowedips, endpoint, serverprivatekey, kbpersecond, mintingfee } = e.target.elements;

    fieldset.disabled = true;

//   await guestBook.addMessage(message.value,mintingfee.value)
//the following call uses message.value as token_id input temporarily, token_id should be a random number
    
    await guestBook.addMessage(message.value, message.value, description.value, expiresat.value, startsat.value, ipaddressrange.value, listenport.value, dns.value, postup.value, postdown.value, allowedips.value, endpoint.value, serverprivatekey.value, kbpersecond.value, receiver_id, mintingfee.value)

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
