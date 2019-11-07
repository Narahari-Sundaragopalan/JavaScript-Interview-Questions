/**
 * You have a map that marks the locations of treasure islands. 
 * Some of the map area has jagged rocks and dangerous reefs. 
 * Other areas are safe to sail in. There are other explorers trying to find the treasure. 
 * So you must figure out a shortest route to one of the treasure islands.
 * Assume the map area is a two dimensional grid, represented by a matrix of characters. 
 * You must start from one of the starting point (marked as S) of the map and 
 * can move one block up, down, left or right at a time. The treasure island is marked as X. 
 * Any block with dangerous rocks or reefs will be marked as D. 
 * You must not enter dangerous blocks. You cannot leave the map area. 
 * Other areas O are safe to sail in. 
 * Output the minimum number of steps to get to any of the treasure islands.
 * 
 * Example:

Input:
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]

Output: 3
Explanation:
You can start from (0,0), (0, 3) or (0, 4). 
The treasure locations are (2, 4) (3, 0) and (4, 0). 
Here the shortest route is (0, 3), (1, 3), (2, 3), (2, 4).
 */

const treasureIslandTwo = grid => {
    const isSafe = (x, y, width, height) => {
        return x >= 0 && x <= width && y >= 0 && y <= height &&
            grid[x][y] !== 'D';
    }

    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];
    let [endX, endY] = [grid[0].length - 1, grid.length - 1];

    const minStep = () => {
        let queue = [];

        for (let i = 0; i < endX; i++) {
            for (let j = 0; j < endY; j++) {
                if (grid[i][j] === 'S') {
                    let node = {
                        x: i,
                        y: j,
                        val: 'S',
                        step: 0
                    };
                    queue.push(node)
                    grid[i][j] = 'D';
                }
            }
        }
    
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