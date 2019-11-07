var prisonAfterNDays = function(cells, N) {
    let output = [...cells];
    
    while (N > 0) {
        for (let i = 0; i < cells.length; i++) {
            output[i] = (cells[i-1] === cells[i+1]) ? 1 : 0;    
        }
          
        cells = [...output];
        N = (N - 1) % 14;
    }
    
    return cells;
};

/*************** OR *****************/

const prisonAfterNDays = (cells, N) => {
    let output = [...cells];

    while (N > 0) {
        output[0] = 0;

        for (let i = 1; i <= cells.length - 2; i++) {
            output[i] = (cells[i - 1] === cells[i + 1]) ? 1 : 0;
        }

        output[cells.length - 1] = 0;

        cells = [...output];
        N = (N - 1) % 14;
    }

    return cells;
}