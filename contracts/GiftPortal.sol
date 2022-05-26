// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;
import "hardhat/console.sol";
contract GiftPortal {
    uint256 giftWaves;
    constructor() {
        console.log("this is my first smartcontract and i am smart");
    }
    function gift() public {
        giftWaves += 2;
        console.log("%s has gifted us !", msg.sender);
    }
    function getTotalGift() public view returns (uint256) {
       console.log("we have %d total gifts!", giftWaves); 
       return giftWaves;
    }
}