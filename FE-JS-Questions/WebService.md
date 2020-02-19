```html
<section class="file-upload">
	<form class="uploadFileForm" method="post" enctype="multipart/form-data">
		<div>
			<label for="gt10GBFile">Upload a file Greater than 10TB</label>
			<input type="file" id="gt10GBFile" name="gt10GBFile" accept=".doc, docx, .xml, application/msword"/>
		</div>
		<div>
			<button class="uploadButton">Submit</button>
		</div>
	</form>
</section>
```

## Server Side 
> To read a file greater than 10GB, store all the distinct words and number of times each word occurs in O(N)

* Assumption: File contains lines separated by newline character and words separated by space character

```js
// Parse line by line (Using NodeJs functions to read file below)
const stream = fs.createReadStream(filePath, {
	flags: 'r',
	encoding: 'utf-8'
});
let buffer = '';
const wordMap = new Map();

// Store each line into a buffer
stream.on('data', d => {
	buffer += d.toString();
	processBuffer();
});

const processBuffer = () => {
	let pos;

	while ((pos = buffer.indexOf('\n') >= 0)) { // Keep going till there is a newline somewhere in the buffer
		if (pos === 0) {  // if there is more than 1 newline character, buffer will start with \n
			buffer = buffer.slice(1); // discard and continue
			continue;
		}

		processLine(buffer.slice(0, pos)); // Process each line and store in Map
		buffer = buffer.slice(pos + 1); // Move to next line
	}
}

const processLine = line => {
	const words = line.split(' ');

	for (let word of words) {
		if (wordMap.has(word)) {
			wordMap.set(word, wordMap.get(word) + 1);
		} else {
			wordMap.set(word, 1);
		}
	}
}

// When the request for search comes in, search in the keys of the Map to check if key exists and return all the words
const cache = new Map();
const response = [];

const startsWith = prefix => {
	if (cache.has(prefix)) {
		return JSON.stringify(cache.get(prefix));
	}

	const words = Array.from(wordMap.keys());

	for (let word of words) {
		if (word.includes(prefix)) {
			response.push(word);
			cache.set(prefix, cache.has(prefix) ? cache.get(prefix).push(word) : [word]);
		}
	}

	return JSON.stringify(response);
}

// When user types any input on client side - search for the input prefix using above function
// Print the returned response
// Implement infinite scrolling
```