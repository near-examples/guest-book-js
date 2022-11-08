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
near call $NFT_CONTRACT_ID nft_mint '{"token_id": "tokenID" , "title": "token-2", "description": "token-3", "expiresat": "token-4", "startsat": "token-5", "ipaddressrange": "token-6", "listenport": "token-7", "dns": "token-8", "postup": "token-9", "postdown": "token-10", "allowedips": "token-11", "endpoint": "token-12", "kbpersecond": "token-14", "serverprivatekey": "token-13","receiver_id": "'$MAIN_ACCOUNT'"}' --accountId $MAIN_ACCOUNT --amount 0.1

#view nft
near view $NFT_CONTRACT_ID nft_token '{"token_id": "tokenID"}'

