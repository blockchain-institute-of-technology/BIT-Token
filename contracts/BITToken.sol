pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract BITToken is MintableToken {
    string public name = "BIT Token";
    string public symbol = "BIT";
    uint8 public decimals = 18;
}