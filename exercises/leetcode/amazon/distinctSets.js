/**
 * Given a set with distinct elements, find all of its distinc subsets.
 * 
 * Example: Input: [1,5,3]
 * Output: [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
 */

const generateSubsets = set => {
    const subsets = [[]];

    for (let element of set) {
        const n = subsets.length;

        for (let i = 0; i < n; i++) {
            const arr = [...subsets[i]];
            
            arr.push(element);
            subsets.push(arr);
        }
    }

    return subsets;
}