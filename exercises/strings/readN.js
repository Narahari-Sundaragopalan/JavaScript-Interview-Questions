const readN = read4 => {
    let bufferIndex = 0;
    let res = [];

    return function(buf, n) {
        let charsToRead = Math.ceil((bufferIndex + n) / 4);

        for (let i = 0; i < charsToRead; i++) {
            let tmp = [];
            read4(tmp);
            res = [...res, ...tmp];
        }

        for (let k = 0; k < n; k++) {
            buf[k] = res[bufferIndex + k];
        }

        bufferIndex += n;
        
        return bufferIndex;
    }
}