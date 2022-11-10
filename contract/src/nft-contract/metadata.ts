import { Contract } from ".";

//defines the payout type we'll be returning as a part of the royalty standards.
export class Payout {
    payout: { [accountId: string]: bigint };
    constructor({ payout }: { payout: { [accountId: string]: bigint } }) {
        this.payout = payout;
    }
}

export class NFTContractMetadata {
    spec: string;
    name: string; 
    symbol: string; 
    icon?: string; 
    base_uri?: string;
//    reference?: string;
//    reference_hash?: string;
    
    constructor(
        {
            spec, 
            name, 
            symbol, 
            icon, 
            baseUri, 
//            reference, 
//            referenceHash
        }:{ 
            spec: string, 
            name: string, 
            symbol: string, 
            icon?: string, 
            baseUri?: string, 
//            reference?: string, 
//            referenceHash?: string
        }) {
        this.spec = spec  // required, "Cableguard NFTC 0.1"
        this.name = name  // required, "NFTC"
        this.symbol = symbol // required, "CG"
        this.icon = icon // Data URL
        this.base_uri = baseUri // Gateway to find NFTC validators
//        this.reference = reference // URL to a JSON file with more info
//        this.reference_hash = referenceHash // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
    }
}
  
export class TokenMetadata {
    title:  string; // Provider of the VPN Service
    description:  string; // Description of the VPN Service
//    media?: string;
//    media_hash?: string;
//    copies?: number;
//    issued_at?: string;
    expiresat: string; // When the VPN Service expires, Unix epoch in milliseconds, 1 year by default in the user interface
    startsat: string; // When the VPN Service starts, Unix epoch in milliseconds
//    updated_at: string; // When token was last updated, Unix epoch in milliseconds
//    extra:  string; // anything extra the NFT wants to store on-chain. Can be stringified JSON.
//    reference:  string; // URL to an off-chain JSON file with more info.
//    reference_hash: Option<Base64VecU8>, // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.

// Following parameters belong to the wireguard config file section [Interface]
//    vpnaccelerator: Option<Bool>, // VPN Accelerator is on if true, off if false, future feature not for the POC
//    privatekey:  string; //  This is sourced from the Wallet
    ipaddressrange: string; // (Addr not Net because Borsh does not have a matching trait) IP Adress range, suggested random in the user interface
    listenport: string; // Port number, suggested random in the user interface
    dns: string; // DNS IP Adress, empty by default in the user interface
//    saveconfig: Option<Bool>, // This is not an applicable feature for Non fungible token based VPN Services
    postup:  string;  // Post Up command for the server, with a default in the user interface
//    predown:  string; // Pre Down ip command, future feature not for the POC
    postdown:  string; // Post Down command for the server, with a default in the user interface
    // Following parameters belong to the wireguard config file section [Peer]
//    publickey:  string; // This is sourced from the wallet
    allowedips: string; // (Addr not Net because Borsh does not have a matching trait) Range of IP Addresses that clients can connect to, default "everywhere"
    endpoint: string; // IPAddress and port where the clients connect
    // Following parameters are part of the cableguard spec specific section [Signature] The enable the author of a CBG bbadge verify authorship
    authornftcontractid:  string; // Non fungible token ID of the "author" of the set of Non fungible tokens created
    authorsignature:  string;  //  Hash of the Non fungible token signed with authornftcontractid's publickey sourced from the blockchain
    kbpersecond: string; // Bandwith of the subscription in Kb/s, 1000000 by default in the user interface
//    requestspersecond: Option<u64>, // Requests per second of the subscription, future feature not for the POC
//    authorizedlocation:  string; // From what region the subscription is valid, future feature not for the POC
//    authorizednetwork: Option<Ipv4Addr>, // From what network range the subscription is valid, future feature not for the POC

    constructor({
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
            kbpersecond
        }) {
        this.title = title,
        this.description = description,
//            media, 
//            mediaHash, 
//            copies, 
//            issuedAt, 
        this.expiresat = expiresat, 
        this.startsat = startsat, 
//            updatedAt, 
//            extra, 
//            reference, 
//            referenceHash,
        this.ipaddressrange = ipaddressrange, // (Addr not Net because Borsh does not have a matching trait) IP Adress range, suggested random in the user interface
        this.listenport = listenport, // Port number, suggested random in the user interface
        this.dns = dns, // DNS IP Adress, empty by default in the user interface
        this.postup = postup,  // Post Up command for the server, with a default in the user interface
        this.postdown = postdown, // Post Down command for the server, with a default in the user interface
        this.allowedips = allowedips, // (Addr not Net because Borsh does not have a matching trait) Range of IP Addresses that clients can connect to, default "everywhere"
        this.endpoint = endpoint, // IPAddress and port where the clients connect
        this.authornftcontractid, // Non fungible token ID of the "author" of the set of Non fungible tokens created
        this.authorsignature,  //  Hash of the Non fungible token signed with authornftcontractid's publickey sourced from the blockchain
        this.kbpersecond = kbpersecond // Bandwith of the subscription in Kb/s, 1000000 by default in the user interface
    }
}

export class Token {
    owner_id: string;
    approved_account_ids: { [accountId: string]: number };
    next_approval_id: number;
    royalty: { [accountId: string]: number };

    constructor({ 
        ownerId, 
        approvedAccountIds, 
        nextApprovalId, 
        royalty 
    }:{ 
        ownerId: string, 
        approvedAccountIds: { [accountId: string]: number }, 
        nextApprovalId: number, 
        royalty: { [accountId: string]: number } 
    }) {
        //owner of the token
        this.owner_id = ownerId,
        //list of approved account IDs that have access to transfer the token. This maps an account ID to an approval ID
        this.approved_account_ids = approvedAccountIds,
        //the next approval ID to give out. 
        this.next_approval_id = nextApprovalId,
        //keep track of the royalty percentages for the token in a hash map
        this.royalty = royalty
    }
}

//The Json token is what will be returned from view calls. 
export class JsonToken {
    token_id: string;
    owner_id: string;
    metadata: TokenMetadata;
    approved_account_ids: { [accountId: string]: number };
    royalty: { [accountId: string]: number };

    constructor({ 
        tokenId, 
        ownerId, 
        metadata, 
        approvedAccountIds, 
        royalty 
    }:{
        tokenId: string,
        ownerId: string,
        metadata: TokenMetadata,
        approvedAccountIds: { [accountId: string]: number },
        royalty: { [accountId: string]: number }
    }) {
        //token ID
        this.token_id = tokenId,
        //owner of the token
        this.owner_id = ownerId,
        //token metadata
        this.metadata = metadata,
        //list of approved account IDs that have access to transfer the token. This maps an account ID to an approval ID
        this.approved_account_ids = approvedAccountIds,
        //keep track of the royalty percentages for the token in a hash map
        this.royalty = royalty
    }
}

//get the information for a specific token ID
export function internalNftMetadata({
    contract
}:{
    contract: Contract
}): NFTContractMetadata {
    return contract.metadata;
}