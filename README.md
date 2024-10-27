# Web3 NFT Project Overview

This repository demonstrates how to build and deploy a basic NFT (ERC721) project using two popular Ethereum development frameworks: Hardhat and Truffle. Both frameworks provide powerful tools for smart contract development, testing, and deployment.

## Project Structure

The project is divided into two main folders:

Hardhat:

- Uses Hardhat for smart contract development.
- Provides commands for compiling contracts, deploying them to test networks, and running tests.
- Supports forking networks using Infura for debugging and validation.

Truffle:

- Utilizes Truffle for smart contract development and testing.
- Allows for compiling, migrating, and testing contracts on a local Ganache instance.
- Offers features for deploying contracts to test networks and verifying them on Etherscan.-

## Contract Overview

SpaceBear Contract Overview
The SpaceBear contract is an ERC721 token implementation for minting and managing NFTs (Non-Fungible Tokens). It leverages OpenZeppelin Contracts to ensure security and compliance with ERC721 standards.

Key Features:

- Token Standard: Implements ERC721 and ERC721URIStorage standards, allowing for unique token identifiers and associated metadata.
- Owner Control: Inherits from the Ownable contract, enabling the contract creator to manage minting and token ownership.
- Minting Functionality: Includes a safeMint function that allows the owner to mint new tokens, assigning them to specified addresses with a corresponding metadata URI.
- Base URI: Overrides the \_baseURI function to provide a base URL for the token metadata, ensuring that the token details can be easily retrieved.
- Interface Support: Overrides supportsInterface to comply with ERC721 standards, confirming that the contract supports various interface identifiers.
