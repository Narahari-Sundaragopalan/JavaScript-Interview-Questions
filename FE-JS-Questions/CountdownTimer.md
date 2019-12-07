## Countdown Timer

```html
<div id="timer"></div>
<button id="pause">Pause</button>
<button id="resume">Resume</button>
```

```js
const countDownTimeInMinutes = 10;
const now = Date.parse(new Date());
let deadline = new Date(now + countDownTimeInMinutes * 60 * 1000);

const calcTimeRemaining = endTime => {
	const total = Date.parse(endTime) - Date.parse(new Date());
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const seconds = Math.floor((total / 1000) % 60);

	return {
		"total": total,
		"minutes": minutes,
		"seconds": seconds
	};
}

let timeInterval;
const runTimer = (id, endTime) => {
	const timerElement = document.getElementById(id);

	function updateTimer() {
		const timeRemaining = calcTimeRemaining(endTime);
		
		timerElement.innerHTML = `${timeRemaining.minutes} minutes : ${timeRemaining.seconds} seconds`;
		if (timeRemaining.total <= 0) {
			clearInterval(timeInterval);
			timerElement.innerHTML = "Timer Expired";
		}
	}
	updateTimer();
	timeInterval = setInterval(updateTimer, 1000);
}

runTimer("timer", deadline);

let isPaused = false;
let timeLeft;
const pauseTimer = () => {
	if(!isPaused) {
		isPaused = true;
		clearInterval(timeInterval);
		timeLeft = calcTimeRemaining(deadline).total;
	}
}

const resumeTimer = () => {
	if (isPaused) {
		isPaused = false;
		deadline = new Date(Date.parse(new Date()) + timeLeft);
		runTimer("timer", deadline);
	}
}

const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
```

## Class version
```js
class CountdownTimer {
	constructor(elementId, timeInMinutes) {
		this.countDownTimeInMinutes = timeInMinutes;
		this.deadline = new Date(Date.parse(new Date) + this.countDownTimeInMinutes * 60 * 1000);
		this.isPaused = false;
		this.timeInterval = null;
		this.timeLeft = 0;
		this.timerElement = document.getElementById(elementId);
		this.runTimer();
	}

	calcTimeRemaining() {
		const total = Date.parse(this.deadline) - Date.parse(new Date());

		return {
			"total": total,
			"minutes": Math.floor((total / 1000 / 60) % 60),
			"seconds": Math.floor((total / 1000) % 60)
		};
	}

	updateTimer() {
		const timeRemaining = this.calcTimeRemaining();

		this.timerElement.innerHTML = `${timeRemaining.minutes} minutes : ${timeRemaining.seconds} seconds`;

		if (timeRemaining.total <= 0) {
			clearInterval(this.timeInterval);
			this.timerElement.innerHTML = "Timer Expired";
		}
	}

	runTimer() {
		this.updateTimer();
		this.timeInterval = setInterval(this.updateTimer.bind(this), 1000);
	}

	pauseTimer() {
		if (!this.isPaused) {
			this.isPaused = true;
			clearInterval(this.timeInterval);
			this.timeLeft = this.calcTimeRemaining(this.deadline).total;
		}
	}

	resumeTimer() {
		if (this.isPaused) {
			this.isPaused = false;
			this.deadline = new Date(Date.parse(new Date()) + this.timeLeft);
			this.runTimer();
		}
	}
}

const countdownTimer = new CountdownTimer("timer", 10);
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

pauseButton.addEventListener("click", () => countdownTimer.pauseTimer());
resumeButton.addEventListener("click", () => countdownTimer.resumeTimer());
```