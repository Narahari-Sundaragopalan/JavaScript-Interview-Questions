/**
 * Given a 2D grid, each cell is either a zombie 1 or a human 0. 
 * Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. 
 * Find out how many hours does it take to infect all humans?
 * 
 * Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
 */

const minHours = grid => {
    const rows = grid.length;
    const columns = grid[0].length;
    const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    const queue = [];

    let population = rows * columns;
    let hours = 0;

    // add all zombies to a queue
    grid.forEach((row, r) => {
        row.forEach((person, c) => {
            if (person === 1) {
                queue.push([r, c]);
            }
        });
    });

    // if length of queue is equal to total population(elements), 
    // everyone is infected, return hours
    if (queue.length === population) {
        return hours;
    }

    population -= queue.length;

    while(queue.length) {
        if (!population) {
            break;
        }

        // increment as we are in next hour 
        hours++;

        for (let i = 0; i < queue.length; i++) {
            const zombie = queue.shift();

            dirs.forEach(dir => {
                const target = [zombie[0] + dir[0], zombie[1] + dir[1]];

                if (target[0] >= 0 && target[0] < rows
                    && target[1] >= 0 && target[1] < columns
                    && grid[target[0]][target[1]] === 0) {
                    queue.push(target);
                    grid[target[0]][target[1]]++;
                    population--;
                }
            });
        }
    }

    return hours;
}