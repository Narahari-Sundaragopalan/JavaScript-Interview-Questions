/**
 * You have a map that marks the location of a treasure island. 
 * Some of the map area has jagged rocks and dangerous reefs. 
 * Other areas are safe to sail in. There are other explorers trying to find the treasure. 
 * So you must figure out a shortest route to the treasure island.
 * Assume the map area is a two dimensional grid, represented by a matrix of characters. 
 * You must start from the top-left corner of the map and can move 
 * one block up, down, left or right at a time. 
 * The treasure island is marked as X in a block of the matrix. 
 * X will not be at the top-left corner. 
 * Any block with dangerous rocks or reefs will be marked as D. 
 * You must not enter dangerous blocks. You cannot leave the map area. 
 * Other areas O are safe to sail in. The top-left corner is always safe. 
 * Output the minimum number of steps to get to the treasure.
 * 
 * Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) 
The minimum route takes 5 steps.
 */

const treasureIsland = grid => {
    const isSafe = (x, y, width, height) => {
        return x >= 0 && x <= width && y >= 0 && y <= height &&
            grid[x][y] !== 'D';
    }

    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];
    let [startX, startY, endX, endY] = [0, 0, grid[0].length - 1, grid.length - 1];

    const minStep = () => {
        let node = {
            x: startX,
            y: startY,
            val: 'O',
            step: 0
        };
    
        let queue = [node];
    
        while (queue.length) {
            let curr = queue.shift();

            if (curr.val === 'X') {
                return curr.step;
            }

            for (let i = 0; i < dx.length; i++) {
                let [nextX, nextY] = [curr.x + dx[i], curr.y + dy[i]];

                if (!isSafe(nextX, nextY, endX, endY)) {
                    continue;
                }

                let next = {
                    x: nextX,
                    y: nextY,
                    val: grid[nextX][nextY],
                    step: curr.step + 1
                };

                grid[nextX][nextY] = 'D';
                queue.push(next);
            }
        }

        return -1;
    }

    return minStep();
}