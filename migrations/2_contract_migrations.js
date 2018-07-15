const BITTokenCrowdsale = artifacts.require('./BITTokenCrowdsale.sol');
const BITToken = artifacts.require('./BITToken.sol');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = function(deployer, network, accounts) {
    
    const cap = new web3.BigNumber(web3.toWei(25000, 'ether'));
    const rate = new web3.BigNumber(2);
    const wallet = accounts[0];

    //Estimated Cost = ETH .251 
    return deployer
        .then(() => {
            //Ropsten Gas Cost: 1939523 --> .1939 ETH 
            return deployer.deploy(BITToken);
        })
};