const INDEX = {
    'G': 'GOOD',
    'B': 'BAD',
    'U': 'UNKNOWN'
}
const canJump = nums => {
    const map = [];

    for (let i = 0; i < nums; i++) {
        map[i] = INDEX.U;
    }
    map[map.length - 1] = INDEX.G

    for (let pos = nums.length - 2; pos >= 0; pos--) {
        let furthestJump = Math.min(pos + nums[pos], nums.length - 1);
        for (let j = pos + 1; j <= furthestJump; j++) {
            if (map[j] == INDEX.G) {
                map[pos] = INDEX.G;
                break;
            }
        }
    }

    return map[0] == INDEX.G;
}