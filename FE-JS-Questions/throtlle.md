## Design a Throttler

> Implement a throttler that executes an array of tasks. When the throttler is passed a number, only execute that number of the tasks and passes the other tasks into a queue.This problem has a stackoverflow post from a year ago : https://stackoverflow.com/questions/49826332/simple-task-runner-in-javascript-with-waiting?rq=1

```js
class Runner {
  constructor(concurrent) {
    this.taskQueue = []; //this should have "concurrent" number of tasks running at any given time

  }

  push(task) {
    /* pushes to the queue and then runs the whole queue */
  }
}
```
The calling pattern would be:
```js
let runner = new Runner(3);
runner.push(task1);
runner.push(task2);
runner.push(task3);
runner.push(task4);
```

```js
class Runner {
	constructor(concurrent) {
		this.maxCount = concurrent;
		this.taskQueue = [];
		this.runningCount = 0;
	}

	notifyTaskEnd() {
		this.runningCount--;
		this.run();
	}

	run() {
		while (this.taskQueue.length && (this.runningCount < this.maxCount)) {
			this.runningCount++;
			const currentTask = this.taskQueue.shift();

			currentTask(this.notifyTaskEnd);
		}
	}

	push(task) {
		this.taskQueue.push(task);
		this.run();
	}
}
```