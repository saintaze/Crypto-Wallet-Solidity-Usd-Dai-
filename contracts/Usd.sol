// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Usd is ERC20 {
  constructor() ERC20('USD Coin', 'USDC') {}

	function faucet(address account) public {
		_mint(account, 100 * 10 ** uint(6));
	}

	function decimals() public view virtual override returns (uint8) {
		return 6;
	}
}
