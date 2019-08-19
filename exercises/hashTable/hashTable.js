class HashTable {
    constructor() {
        this.memory = [];
    }

    hashKey(key) {
        for (let index = 0; index < key; index++) {
            let code = key.charCodeAt(index);
            hash = ((hash << 5) - hash) + code | 0; 
        }

        return hash;
    }

    get(key) {
        let address = this.hashKey(key);
        return this.memory[address];
    }

    set(key, value) {
        let address = this.hashKey(key);
        this.memory[address] = value;
    }

    remove(key) {
        let address = this.hashKey(key);

        if (this.memory[address]) {
            delete this.memory[address];
        }
    }
}