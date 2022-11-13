#!/bin/bash

near login
export MAIN_ACCOUNT=$1.testnet

near create-account nft-example.$MAIN_ACCOUNT --masterAccount $MAIN_ACCOUNT --initialBalance 10

export NFT_CONTRACT_ID=$2.$MAIN_ACCOUNT

#display environment variables
echo $NFT_CONTRACT_ID
echo $MAIN_ACCOUNT

# install dependencies
npm i

# build the contract
echo ">> Building contract"
# near-sdk-js build src/nft-contract/index.ts build/contract.wasm
npm run build

# deploy the contract
# near dev-deploy --wasmFile build/contract.wasm
near deploy --accountId $NFT_CONTRACT_ID --wasmFile build/contract.wasm

# initialize
near call $NFT_CONTRACT_ID init '{"owner_id": "'$NFT_CONTRACT_ID'"}' --accountId $NFT_CONTRACT_ID

# display contract metadata 
near view $NFT_CONTRACT_ID nft_metadata

#mint test nft
near call $NFTCONTRACTID nft_mint '{"itoken_id": "tokenID" , "ititle": "token-2", "idescription": "token-3", "iexpiresat": "token-4", "istartsat": "token-5", "iipaddressrange": "token-6", "ilistenport": "token-7", "idns": "token-8", "ipostup": "token-9", "ipostdown": "token-10", "iallowedips": "itoken-11", "endpoint": "itoken-12", "ikbpersecond": "token-14", "iserverprivatekey": "token-13","ireceiver_id": "'$NFTCONTRACTID'"}' --accountId $NFTCONTRACTID --amount 0.1

#view nft
near view $NFT_CONTRACT_ID nft_token '{"token_id": "tokenID"}'

