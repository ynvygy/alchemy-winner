// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ContractWinner {
    function attempt() external;
}

contract WeekFourWinner {
    function callWinner(address winnerContractAddress) external {
        ContractWinner(winnerContractAddress).attempt();
    }
}
