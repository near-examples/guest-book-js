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
          <label htmlFor="numberofclients">Number</label>
          <input
            autoComplete="off"
            autoFocus
            id="numberofclients"
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
          <label htmlFor="description">Brief description</label>
          <input
            autoComplete="off"
            autoFocus
            id="description"
            required
          />
        </p>
        <p>Date of Expiration of VPN Service</p>
        <p className="highlight">
          <label htmlFor="expiresat">DD/MM/YYYY</label>
          <input
            autoComplete="off"
            autoFocus
            id="expiresat"
            required
          />
        </p>
        <p>Date of Start of VPN Service</p>
        <p className="highlight">
          <label htmlFor="startsat">DD/MM/YYYY</label>
          <input
            autoComplete="off"
            autoFocus
            id="startsat"
            required
          />
        </p>
        <p>IPv4 addresses range of the VPN clients</p>
        <p className="highlight">
          <label htmlFor="ipaddressrange">IPv4 CIDR notation</label>
          <input
            autoComplete="off"
            autoFocus
            id="ipaddressrange"
            required
          />
        </p>
        <p>Port where the VPN server listens</p>
        <p className="highlight">
          <label htmlFor="listenport">Port number</label>
          <input
            autoComplete="off"
            autoFocus
            id="listenport"
            required
          />
        </p>
        <p>DNS server IPv4 address</p>
        <p className="highlight">
          <label htmlFor="dns">IPv4 address</label>
          <input
            autoComplete="off"
            autoFocus
            id="dns"
            required
          />
        </p>
        <p>Post Up command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postup">e.g. iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</label>
          <input
            autoComplete="off"
            autoFocus
            id="postup"
            required
          />
        </p>
        <p>Post Down command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postdown">e.g. iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE</label>
          <input
            autoComplete="off"
            autoFocus
            id="postdown"
            required
          />
        </p>
        <p>IPv4 addresses accesible by the VPN clients</p>
        <p className="highlight">
          <label htmlFor="allowedips">IPv4 range accesible</label>
          <input
            autoComplete="off"
            autoFocus
            id="allowedips"
            required
          />
        </p>
        <p>IPv4 address of the VPN server where the clients connect</p>
        <p className="highlight">
          <label htmlFor="endpoint">IPv4 address</label>
          <input
            autoComplete="off"
            autoFocus
            id="endpoint"
            required
          />
        </p>
        <p>Maximum Kb per second of each VPN connection</p>
        <p className="highlight">
          <label htmlFor="kbpersecond">Number of Kb</label>
          <input
            autoComplete="off"
            autoFocus
            id="kbpersecond"
            required
          />
        </p>
        <p>Private key of the server for signatures</p>
        <p className="highlight">
          <label htmlFor="serverprivatekey">Private key in Base64</label>
          <input
            autoComplete="off"
            autoFocus
            id="serverprivatekey"
            required
          />
        </p>
        <p>Implicit account of the server in HEX</p>
        <p className="highlight">
          <label htmlFor="implicitaccountid">You MUST pre-initialize the Implicit account with some NEAR before</label>
          <input
            autoComplete="off"
            autoFocus
            id="implicitaccountid"
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
