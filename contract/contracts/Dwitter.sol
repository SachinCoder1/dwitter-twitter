//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Dwitter {
    struct User {
       address wallet;
       string name;
       string username;
       string bio;
       string avatar;
   }

 
     struct Dweet {
         address author;
         string content;
         uint timestamp;
         uint likes;
     }

     Dweet[] public dweets;


   mapping(address => string) public usernames;
   mapping(string => User) public users;

function signup(string memory _username, string memory _name, string memory _bio, string memory _avatar) public {
       require(bytes(usernames[msg.sender]).length == 0, "User already exists");
       require(users[_username].wallet == address(0), "Username is taken, please try another one.");

       users[_username] = User({
           wallet: msg.sender,
           name: _name,
           username: _username,
           bio: _bio,
           avatar: _avatar
       });
       usernames[msg.sender] = _username;
   }
       function getUser(address _wallet) public view returns (User memory) {
       return users[usernames[_wallet]];
   }

   function postDweet (string memory _content) public {
       require(bytes(usernames[msg.sender]).length > 0, "You Must have signed up to use this functionality.");
       require(bytes(_content).length > 0, "You must right something in order to post a dweet.");
       require(bytes(_content).length < 140, "Character must be lower than 140.");

       Dweet memory dweet = Dweet({
           author: msg.sender, content: _content, timestamp: block.timestamp, likes: 0
       });

       dweets.push(dweet);

   }

   function getDweets() public view returns (Dweet[] memory) {
        return dweets;
   } 
}
