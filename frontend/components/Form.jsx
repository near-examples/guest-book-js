import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, currentAccountId }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Please enter Cableguard configuration parameters and double check for typos, { currentAccountId }!</p>
        <p>VPN Provider</p>
        <p className="highlight">
          <label htmlFor="message">VPN Provider</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
          />
        </p>
        <p>VPN Service Description</p>
        <p className="highlight">
          <label htmlFor="descriptioninput">Brief description of the service</label>
          <input
            autoComplete="off"
            autoFocus
            id="descriptioninput"
            required
          />
        </p>
        <p>Date of Expiration of VPN Service</p>
        <p className="highlight">
          <label htmlFor="expiresatinput">Date of Expiration of VPN Service</label>
          <input
            autoComplete="off"
            autoFocus
            id="expiresatinput"
            required
          />
        </p>
        <p>Date of Start of VPN Service</p>
        <p className="highlight">
          <label htmlFor="startsatinput">Date of Start of VPN Service</label>
          <input
            autoComplete="off"
            autoFocus
            id="startsatinput"
            required
          />
        </p>
        <p>IP addresses range of the VPN clients</p>
        <p className="highlight">
          <label htmlFor="ipaddressrangeinput">IP addresses range of the VPN clients</label>
          <input
            autoComplete="off"
            autoFocus
            id="ipaddressrangeinput"
            required
          />
        </p>
        <p>Port where the VPN server listens</p>
        <p className="highlight">
          <label htmlFor="listenportinput">Port where the VPN server listens</label>
          <input
            autoComplete="off"
            autoFocus
            id="listenportinput"
            required
          />
        </p>
        <p>DNS server IP address</p>
        <p className="highlight">
          <label htmlFor="dnsinput">DNS server IP address</label>
          <input
            autoComplete="off"
            autoFocus
            id="dnsinput"
            required
          />
        </p>
        <p>Post Up command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postupinput">Post Up command for the VPN server</label>
          <input
            autoComplete="off"
            autoFocus
            id="postupinput"
            required
          />
        </p>
        <p>Post Down command for the VPN server</p>
        <p className="highlight">
          <label htmlFor="postdowninput">Post Down command for the VPN server</label>
          <input
            autoComplete="off"
            autoFocus
            id="postdowninput"
            required
          />
        </p>
        <p>IP addresses range of clients</p>
        <p className="highlight">
          <label htmlFor="allowedipsinput">IP addresses range of clients</label>
          <input
            autoComplete="off"
            autoFocus
            id="allowedipsinput"
            required
          />
        </p>
        <p>IP address of the VPN server where the clients connect</p>
        <p className="highlight">
          <label htmlFor="endpointinput">IP address of the VPN server where the clients connect</label>
          <input
            autoComplete="off"
            autoFocus
            id="endpointinput"
            required
          />
        </p>
        <p>Maximum Kb per second of each VPN connection</p>
        <p className="highlight">
          <label htmlFor="kbpersecondinput">Maximum Kb per second of each VPN connection</label>
          <input
            autoComplete="off"
            autoFocus
            id="kbpersecondinput"
            required
          />
        </p>
        <p>Implicit account of the server</p>
        <p className="highlight">
          <label htmlFor="implicitaccountidinput">Implicit account of the server</label>
          <input
            autoComplete="off"
            autoFocus
            id="implicitaccountidinput"
            required
          />
        </p>
        <p>Private key of the server for signatures</p>
        <p className="highlight">
          <label htmlFor="serverprivatekeyinput">Implicit key of the server for signatures</label>
          <input
            autoComplete="off"
            autoFocus
            id="serverprivatekeyinput"
            required
          />
        </p>
        <p>
          <label htmlFor="mintingfee">Minting Fee</label>
          <input
            autoComplete="off"
            defaultValue={'0'}
            id="mintingfee"
            min="0"
            step="0.01"
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
