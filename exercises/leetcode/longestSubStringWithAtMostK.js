const longestStringWithAtMostK = (str, k) => {
    let left = 0;
    let right = 0;
    const windowMap = new Map();
    let maxLength = k;

    while (right < str.length) {
        let ch = str[right];

        if (windowMap.size < k + 1) {
            windowMap.set(ch, right);
        }
        right++;

        if (windowMap.size === k + 1) {
            let deleteIndex = Array.from(
                                windowMap.keys()
                                ).reduce(
                                    (a, b) => windowMap.get(a) < windowMap.get(b) ? a : b
                                );

            left = windowMap.get(deleteIndex) + 1;
            windowMap.delete(deleteIndex);
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}