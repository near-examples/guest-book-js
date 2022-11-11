#!/bin/bash

# initilize the contract
near call $NFTCONTRACTID init '{"owner_id": "'$NFTCONTRACTID'"}' --accountId $NFTCONTRACTID
