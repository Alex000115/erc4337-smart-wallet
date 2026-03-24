// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./SmartWallet.sol";

contract WalletFactory {
    IEntryPoint public immutable entryPoint;

    constructor(IEntryPoint _entryPoint) {
        entryPoint = _entryPoint;
    }

    function createAccount(address owner, uint256 salt) external returns (SmartWallet) {
        bytes32 _salt = bytes32(salt);
        address addr = address(new SmartWallet{salt: _salt}(entryPoint, owner));
        return SmartWallet(payable(addr));
    }
}
