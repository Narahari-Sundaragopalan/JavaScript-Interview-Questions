/**
 * A six-sided dice is a small cube with a different number of pips. Each face(side) ranging from 1 to 6.
On any two opposite side of the cube, the number of pips adds up to 7; that is, there are three pairs of opposite sides: 1 and 6, 2 and 5, and 3 and 4.
There are N dice lying on a table, each showing the pips on its top face. In one move, you can take one dice and rotate it to an adjacent face.
For example, you can rotate a dice that shows 1 to show 2, 3, 4 or 5. However, it cannot show 6 in a single move, because the faces with one pip and six pips visible are opposite sides rather than adjacent.
You want to show the same number of pips on the top face of all N dice. Given that each of the dice can be moved multiple times, count the minimum number of moves needed to get equal faces.

Write a function:
that, given an array A consisting of N integers describing the number of pips (from 1 to 6) shown on each dice’s top face, returns the minimum number of moves necessary for each dice show the same number of pips.

For example, given:
• A = [1, 2, 3], the function should return 2, as you can pick the first two dice and rotate each of them in one move so that they all show three pips on the top face. Notice that you can also pick any other pair of dice in this case.
• A = [1, 1, 6], the function should also return 2. The only optimal answer is to rotate the last dice so that it shows one pip. It is necessary to use two rotations to achieve this.
• A = [1, 6, 2, 3], the function should return 3. For instance, you can make all dice show 2: just rotate each dice which is not showing 2 (and notice that for each dice you can do this in one move).

Assume that:
• N is an integer within the range [1…100];
• each element of the array A is an integer within the range [1…6].

 */

const rollDice = diceArray => {
    // find the most common element in array and set that as target for other elements to roll to
    // find if element isOpposite of target -> if true 2 moves 
    // otherwise -> 1 move 
    // reduce 1 as last element does not need to roll

    const findMostCommonElement = (arr) => {
        const countMap = {};
        let frequency = 0;
        let mostFrequent = 0;

        for (let element of arr) {
            countMap[element] = countMap[element] + 1 || 1;

            if (countMap[element] > frequency) {
                frequency = countMap[element];
                mostFrequent = element;
            }
        }

        return frequency === 1 ? arr[arr.length - 1] : mostFrequent;
    }

    const isOpposite = (target, element) => {
        return target + element === 7;
    }

    const target = findMostCommonElement(diceArray);
    let moves = 0;

    for (let element of diceArray) {
        if (element !== target) {
            if (isOpposite(target, element)) {
                moves += 2;
            } else {
                moves += 1;
            }
        }
    }

    return moves;
}