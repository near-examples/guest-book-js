import React from 'react';
import PropTypes from 'prop-types';

// nft_mint field token_id is a generated UUID
// nft_mint field title is entered as the parameter message for the time being
export default function Form({ onSubmit, currentAccountId }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Please enter Cableguard configuration parameters and double check for typos, { currentAccountId }!</p>
        <p>Number of clients</p>
        <p className="highlight">
          <label htmlFor="numberofclientsinput">Number</label>
          <input
            autoComplete="off"
            autoFocus
            id="numberofclientsinput"
            required
          />
        </p>
        <p>VPN Provider</p>
        <p className="highlight">
          <label htmlFor="title">Name of the Provider</label>
          <input
            autoComplete="off"
            autoFocus
            id="title"
            required
          />
        </p>
        <p>VPN Service Description</p>
        <p className="highlight">
          <label htmlFor="descriptioninput">Brief description</label>
          <input
            autoComplete="off"
            autoFocus
            id="descriptioninput"
            required
          />
        </p>
        <p>Date of Expiration of VPN Service</p>
        <p className="highlight">
          <label htmlFor="expiresatinput">DD/MM/YYYY</label>
          <input
            autoComplete="off"
            autoFocus
            id="expiresatinput"
            required
          />
        </p>
        <p>Date of Start of VPN Service</p>
        <p className="highlight">
          <label htmlFor="startsatinput">DD/MM/YYYY</label>
          <input
            autoComplete="off"
            autoFocus
            id="startsatinput"
            required
          />
        </p>
        <p>IPv4 addresses range of the VPN clients</p>
        <p className="highlight">
          <label htmlFor="ipaddressrangeinput">IPv4 CIDR notation</label>
          <input
            autoComplete="off"
            autoFocus
            id="ipaddressrangeinput"
            required
          />
        </p>
        <p>Port where the VPN server listens</p>
        <p className="highlight">
          <label htmlFor="listenportinput">Port number</label>
          <input
            autoComplete="off"
            autoFocus
            id="listenportinput"
            required
          />
        </p>
        <p>DNS server IPv4 address</p>
        <p className="highlight">
          <label htmlFor="dnsinput">IPv4 address</label>
          <input
            autoComplete="off"
            autoFocus
            id="dnsinput"
            required
          />
        </p>
        <p>Post Up command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postupinput">e.g. iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</label>
          <input
            autoComplete="off"
            autoFocus
            id="postupinput"
            required
          />
        </p>
        <p>Post Down command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postdowninput">e.g. iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE</label>
          <input
            autoComplete="off"
            autoFocus
            id="postdowninput"
            required
          />
        </p>
        <p>Initial IPv4 address for VPN clients</p>
        <p className="highlight">
          <label htmlFor="allowedipsinput">IPv4 address, they are assigned sequentially</label>
          <input
            autoComplete="off"
            autoFocus
            id="allowedipsinput"
            required
          />
        </p>
        <p>IPv4 address of the VPN server where the clients connect</p>
        <p className="highlight">
          <label htmlFor="endpointinput">IPv4 address</label>
          <input
            autoComplete="off"
            autoFocus
            id="endpointinput"
            required
          />
        </p>
        <p>Maximum Kb per second of each VPN connection</p>
        <p className="highlight">
          <label htmlFor="kbpersecondinput">Number of Kb</label>
          <input
            autoComplete="off"
            autoFocus
            id="kbpersecondinput"
            required
          />
        </p>
        <p>Private key of the server for signatures</p>
        <p className="highlight">
          <label htmlFor="serverprivatekeyinput">Private key in Base64</label>
          <input
            autoComplete="off"
            autoFocus
            id="serverprivatekeyinput"
            required
          />
        </p>
        <p>Implicit account of the server in HEX</p>
        <p className="highlight">
          <label htmlFor="implicitaccountidinput">You MUST pre-initialize the Implicit account with some NEAR before</label>
          <input
            autoComplete="off"
            autoFocus
            id="implicitaccountidinput"
            required
          />
        </p>
        <p>
          <label htmlFor="mintingfee">NFTC Minting Fee per each client, plus 1 for server</label>
          <input
            autoComplete="off"
            defaultValue={'1'}
            id="mintingfee"
            min="0.5"
            step="0.1"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">
          Mint
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
