//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Dwitter {
    struct User {
        address wallet;
        string name;
        string bio;
        string username;
        string avatar;
    }

    mapping(address=>string) public usernames;
    mapping(string=>User) public users;
}