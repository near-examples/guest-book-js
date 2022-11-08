#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/nft-contract/index.ts build/contract.wasm
