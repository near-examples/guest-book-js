// Talking with a contract often involves transforming data, 
// we recommend you to encapsulate that logic into a class

import { utils } from 'near-api-js';

export class Contract {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

// using method nft_tokens as it seems to have the most compatible variables with get_messages
  async getMessages() {
    const messages = await this.wallet.viewMethod({ contractId: this.contractId, method: "nft_tokens" })
    console.log(messages)
    return messages
  }

  async addMessage(
    numberofclients,
    token_id,
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
    mintingfee) {
    
      const deposit = utils.format.parseNearAmount(mintingfee);
    
    // numberofclients has to be used to mint an nftc for the server and one for each client
    // implicitaccountid should be initialized and is where the nft is sent
    return await this.wallet.callMethod({ contractId: this.contractId,
      method: "nft_mint",
      args: {
      itoken_id: token_id,
      ititle: title,
      idescription: description,
      iexpiresat: expiresat,
      istartsat: startsat,
      iipaddressrange: ipaddressrange,
      ilistenport: listenport,
      idns: dns,
      ipostup: postup,
      ipostdown: postdown,
      iallowedips: allowedips,
      iendpoint: endpoint,
      ikbpersecond: kbpersecond,
      iserverprivatekey: serverprivatekey,
      iimplicitaccountid: implicitaccountid},
      deposit});
  }
}
