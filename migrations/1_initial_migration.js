var Migrations = artifacts.require("./Migrations.sol");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = function(deployer) {
  deployer.deploy(Migrations).then(()=>{sleep(36000)});
};
