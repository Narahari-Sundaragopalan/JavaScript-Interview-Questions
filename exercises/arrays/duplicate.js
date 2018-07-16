// duplicate an array

function duplicate(arr, n) {
	let duplicated = [];
  duplicated = arr.slice();
  let index = 0;
  while (index < n) {
 	 	duplicated = duplicated.concat(arr);
    index+= 1;
  }
  return duplicated
}

duplicate([1,2,3,4], 6);


//Output 
//[1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
