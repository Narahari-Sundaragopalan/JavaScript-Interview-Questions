const minWindow = (s, t) => {
    // create a map with count of unique chars in t
    // create a windowCount map which contains all the required chars from t
    // have a left and right pointer -> right is for expanding and left is for contracting the window
    // have a variable to count the number of unique chars formed in the current window

    // move right pointer ahead and add it to windowCount map
    // if count in windowCountMap is same as tMap then increment formed
    // move left pointer ahead till its <= right and when formed = required chars from tMap

    // check in answer object if current window length is smaller than existing window length,
    // set this as new smallest window
    // remove the char from the windowCountMap
    // reduce formed value if windowCountMap for that char is lesser than tMap char count

    if (s.length === 0 || t.length === 0) {
        return "";
    }

    const tMap = {};

    for (let char of t) {
        tMap[char] = tMap[char] + 1 || 1;
    }

    let requiredChars = Object.keys(tMap).length;
    let formed = 0;
    const windowCountMap = {};
    let ans = {
        "windowLength": -1, 
        "left": 0, 
        "right": 0
    };
    let left = 0;
    let right = 0;

    while (right < s.length) {
        let c = s[right];
        windowCountMap[c] = windowCountMap[c] + 1 || 1;

        if (tMap[c] && tMap[c] === windowCountMap[c]) {
            formed++;
        }

        while (left <=right && formed === requiredChars) {
            let ch = s[left];
            if (ans.windowLength === -1 || right - left + 1 < ans.windowLength) {
                ans.windowLength = right - left + 1;
                ans.left = left;
                ans.right = right;
            }

            windowCountMap[ch] = windowCountMap[ch] - 1;

            if (tMap[ch] && windowCountMap[ch] < tMap[ch]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return ans.windowLength === -1 ? "" : s.substring(ans.left, ans.right + 1);
}

// Modified or Optimized min Window solution. We filter out the chars from s which are not present in t, so that our search for chars is reduced

const minWindowOptimized = (s, t) => {
    const tMap = {};

    for (let char of t) {
        tMap[char] = tMap[char] + 1 || 1;
    }

    let formed = 0;
    let required = Object.keys(tMap).length;
    let left = 0;
    let right = 0;
    const windowCountMap = {};
    let ans = {
        "windowLength": -1,
        "left": 0,
        "right": 0
    };

    const filteredS = [];

    for (let i = 0; i < s.length; i++) {
        if (tMap[char]) {
            filteredS.push([i, s[i]]);
        }
    }

    while (right < filteredS.length) {
        let c = filteredS[right][1];

        windowCountMap[c] = windowCountMap[c] + 1 || 1;

        if (tMap[c] && windowCountMap[c] === tMap[c]) {
            formed++;
        }

        while (left <= right && formed === required) {
            let ch = filteredS[left][1];
            let start = filteredS[left][0];
            let end = filteredS[right][0];
            if (ans.windowLength === -1 || end - start + 1 < ans.windowLength) {
                ans.windowLength = end - start + 1;
                ans.left = start;
                ans.right = end;
            }

            windowCountMap[ch] = windowCountMap[ch] - 1;
            if (tMap[ch] && windowCountMap[ch] < tMap[ch]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return ans.windowLength === -1 ? "" : s.substring(ans.left, ans.right + 1);
}