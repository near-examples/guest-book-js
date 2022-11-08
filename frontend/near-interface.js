/* Talking with a contract often involves transforming data, 
we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';

export class Contract {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }
  
//  async getMessages() {
//    const messages = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_messages" })
//    console.log(messages)
//    return messages
//  }

// using method nft_tokens as it seems to have the most compatible variables with get_messages
  async getMessages() {
    const messages = await this.wallet.viewMethod({ contractId: this.contractId, method: "nft_tokens" })
    console.log(messages)
    return messages
  }

//  async addMessage(message, mintingfee) {
//    const deposit = utils.format.parseNearAmount(mintingfee);
//    return await this.wallet.callMethod({ contractId: this.contractId, method: "add_message", args: { text: message }, deposit });
//  }

  async addMessage(
    token_id,
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
    mintingfee) {
    
      const deposit = utils.format.parseNearAmount(mintingfee);
    
    // message is in the field title, implicitaccountid should be initialized and is where the nft is sent
    return await this.wallet.callMethod({ contractId: this.contractId, method: "nft_mint", args: {
      token_id,
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
      implicitaccountid},
      mintingfee});
  }
}
