## Pagination

```html
<div class="list"></div>
<div class="buttons">
    <button class="first">First</button>
    <button class="previous">Previous</button>
    <button class="next">Next</button>
    <button class="last">Last</button>
</div>
```

```js
const list = [];
const currentPageList = [];
let currentPage = 1;
let numOfPages = 0;
let itemsPerPage = 10;

const makeList = (listLength) => {
    for (let i = 1; i <= listLength; i++) {
        list.push(i);
    }

    numOfPages = Math.ceil(listLength / itemsPerPage);
}

const drawList = () => {
    const list = document.querySelector(".list");
    let items = '';

    for (let i = 0; i < currentPageList.length; i++) {
        items += 'Item-' + currentPageList[i] + '<br/>';
    }

    list.innerHTML = items;
}

const updateButtons = () => {
    document.querySelector(".next").disabled = currentPage === numOfPages ? true : false;
    document.querySelector(".previous").disabled = currentPage === 1 ? true : false;
}

const loadList = (currentPage) => {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    currentPageList = list.slice(start, end);
    drawList();
    updateButtons();
};

const goToPage = pageNum => {
    currentPage = pageNum;
    loadList(currentPage);
};

const nextPage = () => {
    goToPage(currentPage + 1);
};

const prevPage = () => {
    goToPage(currentPage - 1);
};

const firstPage = () => {
    goToPage(1);
};

const lastPage = () => {
    goToPage(numOfPages);
};

makeList(50);
loadList(1);

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");
const firstButton = document.querySelector(".first");
const lastButton = document.querySelector(".last");

nextButton.addEventListener('click', nextPage);
prevButton.addEventListener('click', prevPage);
firstButton.addEventListener('click', firstPage);
lastButton.addEventListener('click', lastPage);
```