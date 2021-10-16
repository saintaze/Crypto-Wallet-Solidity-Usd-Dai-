// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
  constructor() ERC20('Dai Stablecoin', 'DAI') {}

	function faucet(address account) public {
		_mint(account, 100 * 10 ** uint(decimals()));
	}
}
