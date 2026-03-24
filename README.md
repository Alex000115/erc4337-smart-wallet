# ERC-4337 Smart Wallet

This repository provides a foundational Smart Contract Wallet (SCW) that operates under the **Account Abstraction** paradigm. Unlike a standard EOA (Externally Owned Account), this wallet is a contract that can define its own transaction validation logic.

## Core Architecture
* **UserOperation**: A pseudo-transaction object that describes a transaction to be sent on behalf of the user.
* **Bundler**: A node that packages UserOperations from a high-level mempool into a standard transaction.
* **EntryPoint**: The singleton contract that coordinates the validation and execution of UserOperations.

## Features
* **Signature Validation**: Uses EIP-712 or ECDSA to verify the wallet owner.
* **Gas Abstraction**: Compatible with Paymasters to allow gasless user experiences.
* **Atomic Execution**: Support for batching multiple calls into a single transaction.
