## Infinite Scroll
> Implement Infinite Scroll in JS

```js
/**
 * API Docs
 * ---------
 * /posts?page=0 => [{id: 1, title: "Post 1"}, {id: 2, title: "Post 2"}, {id: 3, title: "Post 3"}, N...]
 * /posts?page=1 => [{id: 4, title: "Post 4"}, {id: 5, title: "Post 5"}, {id: 6, title: "Post 6"}, N...]
 * /posts?page=N => [N...]
 */
```

```html
<ul class="infiniteList"></ul>
```

```css
.infiniteList {
	height: 200px;
	width: 200px;
	overflow: auto;
	margin: 30px;
	padding: 20px;
	border: 5px solid black;
}

li {
	padding: 10px;
	list-style-type: none;
}

li:hover {
	background: #ccc;
}
```

```js
const listElements = document.querySelector(".infiniteList");
let nextItem = 1;

const loadMoreItems = () => {
	const postsRetrieved = [];

	// make API call
	getPosts().then(posts => {
		postsRetrieved = posts.map(post => {
			return `<li class="post-title">${post.title}</li>`;
		});
	});

	listElements.innerHTML = postsRetrieved.join('');
};

listElements.addEventListener('scroll', () => {
	if (listElements.scrollTop + listElements.clientHeight >= listElements.scrollHeight) {
		loadMoreItems();
	}
});

loadMoreItems();
```