/**
 * Given a 2d grid map of '1's (land) and '0's (water), 
 * count the number of islands. An island is surrounded by water 
 * and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

const numberOfIslands = grid => {
    let result = 0;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const isLand = (x, y) => {
        return x > -1 && x < grid.length && y > -1 &&
                y < grid[0].length && grid[x, y] !== '0';
    }

    const removeIsland = (startX, startY) => {
        if (grid[startX][startY] === '0') {
            return 0;
        }

        grid[startX][startY] = '0';
        for (let k = 0; k < dx.length; k++) {
            let x = startX + dx[k];
            let y = startY + dy[k];

            if (isLand(x, y)) {
                result += removeIsland(x, y)
            }
        }

        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            result += removeIsland(i, j);
        }
    }

    return result;
}