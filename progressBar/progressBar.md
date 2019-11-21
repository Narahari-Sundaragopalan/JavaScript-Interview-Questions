## Progress Bar with Vanilla JS

### HTML

```html
<div class="progressBarContainer">
    <div class="progressBar" />
</div>

<button onclick="updateProgress(2)">Start</button>
```

### CSS

```css
.progressBarContainer {
    width: 400px;
    height: 30px;
    margin: 40px;
    background-color: light-grey;
}

.progressBar {
    background-color: green;
    height: 100%;
    width: 0%;
}
```

### JS

```js
const updateProgress = delayInSeconds => {
    let atPercent = 0;
    const progressBar = document.querySelector(".progressBar");

    const interval = setInterval(() => {
        atPercent++;
        progressBar.style.width = `${atPercent}%`;
        progressBar.style.innerText = `${atPercent}%`;

        if (atPercent >= 100) {
            clearInterval(interval);
        }
    }, (delayInSeconds * 1000) / 100);
}
```
