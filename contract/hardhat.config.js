require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Y7TgwTX4TH-g6NFxbd8OCagnbCUkPdkz",
      accounts: [
        "452e80fb588796b395a6692a1741178f67f99f882c84e291967736b3735bdf70",
      ],
    },
  },
};
