## Accordion

```html
<div class="AccordionContainer">
	<div id="panel-1" class="AccordionPanel">
		<div class="panelHeader">
			<a href="#panel-1" class="panelTrigger" data-accordion-trigger>
				Accordion 1
			</a>
		</div>
		<div class="panelBody">
			<p class="AccordionContent">
				In Wednesday's scheme of things at the Basin Reserve, Kane Williamson's throwaway line to batting coach Peter Fulton sounded more like a pronouncement. For, that's what it was in a way. Two days out from the start of the first Test, 'shifting to the red ball' is exactly what the two teams were indulged in.
			</p>
		</div>
	</div>
	<div id="panel-2" class="AccordionPanel">
		<div class="panelHeader">
			<a href="#panel-2" class="panelTrigger" data-accordion-trigger>
				Accordion 2
			</a>
		</div>
		<div class="panelBody">
			<p class="AccordionContent">
				And Williamson's comment came in the midst of an intense and proactive session with Fulton where the two were focused on working out the best technique to leave the ball against the Indian attack in home conditions. The Kiwi captain had just walked in to face Fulton with the side-arm after being tested by the bounce of Kyle Jamieson and the deceptive late movement of Daryl Mitchell in the adjoining net; there, a length delivery from the towering uncapped fast bowler had kicked off and taken his outside-edge.
			</p>
		</div>
	</div>
	<div id="panel-3" class="AccordionPanel">
		<div class="panelHeader">
			<a href="#panel-3" class="panelTrigger" data-accordion-trigger>
				Accordion 3
			</a>
		</div>
		<div class="panelBody">
			<p class="AccordionContent">
				A few balls later, a Mitchell delivery snaked back in and had Williamson in a lot of trouble. The skipper wondered out aloud to the all-rounder about whether he'd intended to swing the ball in as late as he did, given that the others had swung a lot earlier.
			</p>
		</div>
	</div>
	<div id="panel-4" class="AccordionPanel">
		<div class="panelHeader">
			<a href="#panel-4" class="panelTrigger" data-accordion-trigger>
				Accordion 4
			</a>
		</div>
		<div class="panelBody">
			<p class="AccordionContent">
				Funnily enough, it was a similar question Virat Kohli had posed to Ishant Sharma earlier in the day after the returning pacer had struck him on the pads with one that jagged back late. Ishant had revealed that it had happened on its own as Kohli tried to get his head around how it had snuck past his defences. The next ball the Indian captain shouldered arms to, despite it pitching just short of length, and saw it just miss the top of off-stump. He even used his bat to actually measure how close the ball had been to striking it, and if his leave was just a fortuitous one rather than a well-judged one.
			</p>
		</div>
	</div>
</div>
```

> Basic CSS for Accordion to function

```css
.AccordionPanel {
  border-top: 2px solid grey;
}

.panelBody {
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  height: 0;
  transition: opacity .25s visibility .25s;
}

.AccordionPanel.accordion-open .panelBody {
  height: auto;
  visibility: visible;
  opacity: 1;
}
```

```js
const toggleClass = (target, open) => {
	const targetEl = document.querySelector(target);

	if (typeof open === 'undefined') {
		targetEl.classList.toggle('accordion-open');
	} else {
		if (open) {
			targetEl.classList.add('accordion-open');
		} else {
			targetEl.classList.remove('accordion-open');
		}
	}
}

const accordionElements = document.querySelectorAll("[data-accordion-trigger]");

for (const el of accordionElements) {
	// attach event to each accordion element
	el.addEventListener("click", event => {
		event.preventDefault();

		// get the element clicked on
		const element = event.currentTarget;
		const target = element.getAttribute("href");
		// get all the siblings of this element
		const siblings = Array.from(
			element.parentElement.parentElement.parentElement.children
			).filter(
				child => child !== element.parentElement.parentElement);

		for (const sibling of siblings) {
			toggleClass(`#${sibling.id}`, false);
		}
		toggleClass(target);
	});
}
```