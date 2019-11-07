/**
 * Given a matrix with r rows and c columns, 
 * find the maximum score of a path starting at [0, 0] and ending at [r-1, c-1]. 
 * The score of a path is the minimum value in that path. 
 * For example, the score of the path 8 → 4 → 5 → 9 is 4.
 * 
 * Don't include the first or final entry. 
 * You can only move either down or right at any point in time.
 */

const pathWithMaxScore = grid => {
    for (let row = 2; row < grid[0].length; row++) {
        grid[0][row] = Math.min(grid[0][row], grid[0][row - 1]);
    }

    for (let column = 2; column < grid.length; column++) {
        grid[column][0] = Math.min(grid[column][0], grid[column - 1][0]);
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            if (i === grid.length - 1 && j === grid[0].length - 1) {
                grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
            } else {
                grid[i][j] = Math.max(Math.min(grid[i - 1][j], grid[i][j]), 
                                    Math.min(grid[i][j], grid[i][j - 1]));
            }
        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
}