// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./Owner.sol";

contract Lottery is Owner {
    uint256 private lotteryNumber = 10;
    uint256 public lotteryFee = 0.001 ether;
    uint256 randomNumDigits = 20;

    struct Player {
        address playerAddress;
        uint256 playerTotalBet;
        uint256 guessedNumber;
    }

    Player[] public players;

    modifier enoughFee() {
        require(msg.value >= lotteryFee);
        _;
    }

    function _generateRandomNumber() private view returns (uint256) {
        uint256 randomNum = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, block.difficulty, msg.sender)
            )
        );
        return randomNum % randomNumDigits;
    }

    function _lotteryWon(uint256 _guessedNum) private view {
        require(_guessedNum == lotteryNumber);
    }

    function playLottery() public payable enoughFee returns (bool) {
        uint256 guessedNum = _generateRandomNumber();
        players.push(Player(msg.sender, msg.value, guessedNum));
        return guessedNum == lotteryNumber;
    }

    function allPlayers() public view returns (Player[] memory) {
        return players;
    }
}
