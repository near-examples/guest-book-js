# What Cableguard NFTC Minter doe
Create Wireguard compatible sets of NFTs with all the configuration and subscription information necessary to set up VPN connections.

Authentication between VPN clients and server uses PKC with a twist. Ownership of the NFTC is doubled-checked with the NEAR Protocol in real time, and the PKC pair used is the pair of the NFTC themselves.

### 0. Pre requisites
near cli installed

### 1. Build
npm install
npm run build
### 2. Deploy the Contract
npm run deploy

### 3. Initialize the Contract
npm run init

### 4. Start the Front End
npm run start

open the Front End from a browser
log in with your NEAR Wallet

### 5. Jump start your server account
Create an implicit accound ID and a private key with:
near generate-key
Send some 0.01 Near to this implicit account ID to activate it

### 6. Input the Cableguard configuration in the Front End
Input values for:
- Number of clients: No default value
- VPN Provider: No default value / IT CAN BE EMPTY
- VPN Service Description: No default value / IT CAN BE EMPTY
- Date of Expiration of VPN Service: 1 year in the future from today / IT CAN BE EMPTY
- Date of Start of VPN Service: today
- IPv4 addresses range of the VPN clients: 10.0.0.1/24
- Port where the VPN server listens: A random number between 49152 and 65535
- DNS server IPv4 address: : No default value / IT CAN BE EMPTY
- Post Up command for the VPN server: iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
- Post Down command for the VPN server: iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
- Initial IPv4 address for VPN clients: 0.0.0.0/0, ::/0
- IPv4 address of the VPN server where the clients connect: No default value
-Maximum Kb per second of each VPN connection 100000
-Private key of the server for signatures: No default value
-Implicit account of the server in HEX: No default value

The NFTCMINTERCONTRACT ID is displayed. You will need it later.

### 7. Pay the Minting Fee and create the NFTCs
All the set of NFTs get UUIDs and the client NFTCS are signed with the server private key
The server NFTC is sent to the server implicit account ID

### 8. Configure the server and start it
ip link add dev NAMEOFTUNDEVICE type wireguard
ip addr add IPADDRESS/24 dev NAMEOFTUNDEVICE
wg set NAMEOFTUNDEVICE listen-port LISTENPORT SERVER_NFTC_UUID NFTCMINTERCONTRACT
ip link set NAMEOFTUNDEVICE

### 9. Configure the clients and start it (for every client)
Create an implicit accound ID and a private key with:
near generate-key
Send some 0.01 Near to this implicit account ID to activate it
Send a NFTC this implicit account ID

ip link add dev NAMEOFTUNDEVICE type wireguard
ip addr add IPADDRESS/24 dev NAMEOFTUNDEVICE
wg set NAMEOFTUNDEVICE listen-port LISTENPORT CLIENT_NFTC_UUID NFTCMINTERCONTRACT
ip link set NAMEOFTUNDEVICE



