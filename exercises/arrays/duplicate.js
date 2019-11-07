// duplicate an array

function duplicate(arr, n) {
	let duplicated = [];
    let index = 0;
    while (index < n) {
 	 	duplicated = duplicated.concat(arr);
        index++;
  }
  return duplicated
}

duplicate([1,2,3,4], 6);


//Output 
//[1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
