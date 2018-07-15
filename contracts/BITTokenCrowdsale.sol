pragma solidity ^0.4.23;

import './BITToken.sol';
import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol';


contract BITTokenCrowdsale is CappedCrowdsale, MintedCrowdsale {
    constructor
        (   
            uint256 _cap,
            uint256 _rate,
            address _wallet,
            MintableToken _token
        )
        public
        Crowdsale(_rate, _wallet, _token)
        CappedCrowdsale(_cap) {

        }
}