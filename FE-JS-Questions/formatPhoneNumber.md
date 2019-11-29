## Format Phone Number

```html
<div class="phoneNumberInput-Container">
	<input class="phoneNumber" type="text" />
	<span class="errorMessage">Invalid Phone number format</span>
</div>
```

```css
.errorMessage {
	display: none;
	color: red;
}

.errorMessage .show {
	display: block;
} 
```

```js
const phoneField = document.querySelector(".phoneNumber");

function formatPhone(event) {
	const phoneInput = event.target.value;
	const validPhoneFormat = /(\(\d{3}\)?)-\d{3}-\d{4}/;

	if (phoneInput.length < 10) {
		const errorSpan = document.querySelector(".errorMessage");
		errorSpan.innerHTML = "Phone Number too short. Enter in this format: (###)-###-####";

		errorSpan.classList.add('show');
		return;
	}

	const isPhoneFormatted = validPhoneFormat.test(phoneInput);

	if (!isPhoneFormatted) {
		const phoneAreaCode = phoneInput.slice(0, 3);
		const phoneFirstThree = phoneInput.slice(3, 6);
		const phoneLastFour = phoneInput.slice(6, 10);

		event.target.value = `(${phoneAreaCode})-${phoneFirstThree}-${phoneLastFour}`;
	}
}

phoneField.addEventListener("change", formatPhone);
phoneField.addEventListener("keyUp", formatPhone);

// debounce can be added if event listener is added on input, to limit number of calls to format the phone
```