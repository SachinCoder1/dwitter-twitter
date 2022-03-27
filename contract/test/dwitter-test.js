describe("Dwitter", function () {
  it("Test getData function", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    const data = await dwitter.getData();
    expect(data).to.equal("Some important data");
    console.log("test getData successful!");
  });
});