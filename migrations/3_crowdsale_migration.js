const BITTokenCrowdsale = artifacts.require('./BITTokenCrowdsale.sol');
const BITToken = artifacts.require('./BITToken.sol');


module.exports = function(deployer, network, accounts) {
    
    const cap = new web3.BigNumber(web3.toWei(25000, 'ether'));
    const rate = new web3.BigNumber(2);
    const wallet = accounts[0];

    //Estimated Cost = ETH .251 
    return deployer
        .then(() => {
            return deployer.deploy(
                //Ropsten Gas cost: 571783 --> .0571 ETH 
                BITTokenCrowdsale,
                cap,
                rate,
                wallet,
                BITToken.address
            ).then(()=>{
                BITTokenInstance = BITToken.at(BITToken.address)
                BITTokenInstance.transferOwnership(BITTokenCrowdsale.address)
            });
        });
};