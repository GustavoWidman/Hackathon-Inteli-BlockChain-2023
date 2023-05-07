// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenInteraction {
    IERC20 public token;
    uint256 public spreader;

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function transferToken(address _to, uint256 _amount) public {
        token.transfer(_to, _amount);
    }

    function approveSpender(address _spender, uint256 _amount) public {
        token.approve(_spender, _amount);
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return token.balanceOf(_owner);
    }

    function allowanceOf(address _owner) public view returns (uint256) {
        return token.allowance(_owner, address(this));
    }

    function spreaderof() public view returns (uint256) {
        return spreaderof();
    }

    function transferToFriend(address sender, address payable _friend, uint256 _amount) public {
        spreader = spreaderof();

        // Transfer tokens from sender to contract
        token.approve(spreader, _amount);
        token.transferFrom(sender, address(this), _amount);
        token.allowance(sender, address(this));
        

        token.transfer(_friend, _amount);

        // Transfer tokens from contract to friend
        token.approve(spreader, _amount);
        token.transferFrom(address(this), _friend, _amount);
        token.allowance(address(this), _friend);

    }
}

