pragma solidity ^0.8.27;

import "forge-std/Test.sol";
import "../src/SpaceBear.sol";

contract SpaceBearTest is Test {

    SpaceBear spacebear;
    function setUp() public {
        spacebear = new SpaceBear(msg.sender);
    }

    function testNameIsSpacebear() public view {
        assertEq(spacebear.name(), "SpaceBear");
    }
}