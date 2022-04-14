const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("Should return the name", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const [user1, user2] = await ethers.getSigners();
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();


    await dwitter.signup("hloname", "hlonames", "hlo bio", "hlo avatar");
    console.log("Signing is in progress for hlo don");

    const user = await dwitter.users("hloname");
    expect(user.name).to.equal("hlonames");
    expect(user.bio).to.equal("hlo bio");
    expect(user.avatar).to.equal("hlo avatar")
    console.log("user signup is successful, enjoy!!")

    expect(await dwitter.usernames(user1.address)).to.equal("hloname");
    await expect(dwitter.signup("", "", "", "")).to.be.revertedWith(
      "User already exists",
    );
    console.log("test user already exists error");


    await expect(
      dwitter
        .connect(user2)
        .signup("hloname", "hlonames", "hlo bio", "hlo avatar"),
    ).to.be.revertedWith("Username is taken, please try another one.");
    console.log("test username is taken error");
    await dwitter.postDweet("Hello my new world")
   
     expect((await dwitter.dweets(0)).content).to.equal("Hello my new world");
     console.log("test get dweets is successful")

  });
});
