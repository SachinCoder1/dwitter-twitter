const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("Should return the name", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    expect(await dwitter.getName()).to.equal("");

    const setname = await dwitter.setName("Hola, mundo!");

    // wait until the transaction is mined
    await setname.wait();

    expect(await dwitter.getName()).to.equal("Hola, mundo!");
  });
});
