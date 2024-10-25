# Learn Web3 NFT Project

This project demonstrates how to build and deploy a basic NFT(ERC721) project using Solidity, Truffle, and Ganache.

## Prerequisites

Make sure you have the following installed:

- Node.js
- Truffle - Framework for smart contract development.
- Ganache - Personal blockchain for Ethereum development.
- Infura - Ethereum blockchain node provider.
- MetaMask - Web3 wallet for interacting with Ethereum.

## Running the Application Locally

You can use Truffle’s built-in development environment to compile, migrate, and test your contracts on a local Ganache instance.

### Start Truffle Development Console with Ganache

To open the Truffle development console and spin up a local blockchain using ganache, run the following command:

```bash
ganache
```

Open new Terminal and Run this:

```bash
truffle console --network ganache
```

### Compile the Contracts

Once the console is open, you can compile your contracts by running:

```bash
truffle compile
```

## Migrate the Contracts

To deploy your contracts on the local development blockchain, run:

```bash
migrate
```

## Running Tests

To run the tests for your contracts, you can use the following command in the Truffle console or your terminal:

```bash
truffle test
```

## Deploy your contract in to the Test Network or Mainnet using Infura

To deploy your contract, ensure you have your .infura and .secrets files set up with your Infura Project ID and seed phrase, then run truffle migrate --network [network_name] in your terminal Create an account on [https://app.infura.io/](https://app.infura.io/) if you haven't already.

```bash
truffle migrate --network <network_name>
```

## Deploy your contract using truffle dashboard

To deploy your contract you can use the following command in the Truffle console or your terminal:

```bash
truffle dashboard
```

## Verify your contract in the Etherscan

To verify your contracts, you can use the following command in the Truffle console or your terminal, make sure the .etherscan file has your api key:

```bash
truffle run verify SpaceBear --network sepolia
```
