const Dai = artifacts.require("Dai");
const Usd = artifacts.require("Usd");

module.exports = async (deployer, _network, accounts) => {
  await deployer.deploy(Dai);
	const dai = await Dai.deployed();
  await deployer.deploy(Usd);
	const usd = await Usd.deployed();

	// check before balance
	const balB0 = await dai.balanceOf(accounts[0]);
	const balB1 = await dai.balanceOf(accounts[1]);
	const balB2 = await dai.balanceOf(accounts[2]);
	console.log('BEFORE', balB0.toString(), balB1.toString(), balB2.toString());

	// sends 100 tokens to following accounts;
	await dai.faucet(accounts[0]);
	await dai.faucet(accounts[1]);
	await dai.faucet(accounts[2]);
	await dai.faucet(accounts[3]);

	// sends 100 tokens to following accounts;
	await usd.faucet(accounts[0]);
	await usd.faucet(accounts[1]);
	await usd.faucet(accounts[2]);
	await usd.faucet(accounts[3]);

	// check after balance
	const balA0 = await dai.balanceOf(accounts[0]);
	const balA1 = await dai.balanceOf(accounts[1]);
	const balA2 = await dai.balanceOf(accounts[2]);
	console.log('AFTER', balA0.toString(), balA1.toString(), balA2.toString());

	const daiDecimals = await dai.decimals();
	const usdDecimals = await usd.decimals();
	console.log('dec', daiDecimals.toString(), usdDecimals.toString());
};
