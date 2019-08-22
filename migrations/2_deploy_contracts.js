var Election = artifacts.require("./Election.sol");
//var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(Election);
};