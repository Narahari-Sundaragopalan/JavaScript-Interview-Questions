## Carousel

```html
<div class="carouselWrapper">
	<button class="carouselButton carouselButtonLeft displayNone">
		<img src="images/left.svg" alt="" />
	</button>
	
	<div class="carouselContainer">
		<ul class="carouselTracker">
			<li class="carouselSlide currentSlide">
				<img class="carouselImage" src="images/slide-1.jpg" alt="" />
			</li>
			<li class="carouselSlide">
				<img class="carouselImage" src="images/slide-2.jpg" alt="" />
			</li>
			<li class="carouselSlide">
				<img class="carouselImage" src="images/slide-3.jpg" alt="" />
			</li>
		</ul>
	</div>
	
	<button class="carouselButton carouselButtonRight">
		<img src="images/right.svg" alt="" />
	</button>

	<div class="carouselNavigation">
		<button class="carouselIndicator currentSlide"></button>
		<button class="carouselIndicator"></button>
		<button class="carouselIndicator"></button>
	</div>
</div>
```

```css
.carouselWrapper {
	position: relative;
	height: 600px;
	width: 80%;
	margin 0 auto;
}

.carouselImage {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carouselContainer {
	background: lightgreen;
	height: 100%;
	position: relative;
	overflow: hidden;
}

.carouselTracker {
	padding: 0;
	margin: 0;
	list-style: none;
	height: 100%;
	position: relative;
	transition: transform 250ms ease-in;
}

.carouselSlide {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
}

.carouselButton {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: transparent;
	border: 0;
	cursor: pointer;
}

.carouselButtonLeft {
	left: -40px;
}

.carouselButtonRight {
	right: -40px;
}

.carouselButton img {
	width: 12px;
}

.carouselNavigation {
	display: flex;
	justify-contents: center;
	padding: 10px 0;
}

.carouselIndicator {
	border: 0;
	border-radius: 50%;
	height: 12px;
	width: 12px;
	margin: 0 12px;
	background: rgba(0, 0, 0, 0.3);
	cursor: pointer;
}

.carouselIndicator.currentSlide {
	background: rgba(0, 0, 0, 0.8);
}

.displayNone {
	display: none;
}
```


```js
const track = document.querySelector('.carouselTracker');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carouselButtonLeft');
const nextButton = document.querySelector('.carouselButtonRight');
const dotsNav = document.querySelector('.carouselNavigation');
const dots = Array.from(dotsNav.children);

// get each slide width
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
const setSlidePosition = (slide, index) => {
	slide.style.width = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = `translateX(-${targetSlide.style.left})`;
	currentSlide.classList.remove('currentSlide');
	targetSlide.classList.add('currentSlide');
};

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('currentSlide');
	targetDot.classList.add('currentSlide');
};

const hideShowArrows = targetIndex => {
	if (targetIndex === 0) {
		prevButton.classList.add('displayNone');
		nextButton.classList.remove('displayNone');
	} else if (targetIndex === slides.length - 1) {
		prevButton.classList.remove('displayNone');
		nextButton.classList.add('displayNone');
	} else {
		prevButton.classList.remove('displayNone');
		nextButton.classList.remove('displayNone');
	}
};
//on click right, move slides to right
nextButton.addEventListener('click', event => {
	const currentSlide = track.querySelector('.currentSlide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotsNav.querySelector('.currentSlide');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);
	
	moveToSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
	hideShowArrows(nextIndex);
});

prevButton.addEventListener('click', event => {
	const currentSlide = track.querySelector('.currentSlide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotsNav.querySelector('.currentSlide');
	const prevDot = currentDot.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);

	moveToSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
	hideShowArrows(prevIndex);
});

dotsNav.addEventListener('click', event => {
	const targetDot = event.target.closest('button');

	if (!targetDot) return;

	const currentSlide = track.querySelector('.currentSlide');
	const currentDot = dotsNav.querySelector('.currentSlide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
	hideShowArrows(targetIndex);
})
```
