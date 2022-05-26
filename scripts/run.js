const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const giftContractFactory = await hre.ethers.getContractFactory("GiftPortal");
  const giftContract = await giftContractFactory.deploy();
  await giftContract.deployed();

  console.log("Contract deployed to:", giftContract.address);
  console.log("Contract deployed by:", owner.address);

  let giftCount;
  giftCount = await giftContract.getTotalGift();

  let giftTxn = await giftContract.gift();
  await giftTxn.wait();

  giftCount = await giftContract.getTotalGift();
  giftTxn = await giftContract.connect(randomPerson).gift();
  await giftTxn.wait();
  giftCount = await giftContract.getTotalGift();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();