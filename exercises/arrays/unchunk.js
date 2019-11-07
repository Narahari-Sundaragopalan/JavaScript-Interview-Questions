// --- Directions
// Given a chunked array join the array into a single array
// --- Examples
// unChunkArray([[ 1, 2], [3, 4]]) --> [ 1, 2, 3, 4]


function unChunkArray() {
  let unchunked = [];
  const arr = [[1,2], [3,4,5], [6], 7, [8]];

  for(let element of arr) {		
    if(Array.isArray(element)) {
      for(let e of element) {
    	unchunked.push(e);
      }
    } else {
    	unchunked.push(element);
    }  
  }
  return unchunked;
}

// function call for test
//unChunkArray();

const unchunk = array => {
    let unchunked = [];

    for (let element of array) {
        if (Array.isArray(element)) {
            unchunked = unchunked.concat(unchunk(element));
        } else {
            unchunked.push(element);
        }
    }

    return unchunked;
}
