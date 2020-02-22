## Holy Grail Layout

```
===========================================================================
=============================== HEADER ====================================
===========================================================================
================== ==================================== ===================
================== ==================================== ===================
================== ==================================== ===================
================== ==================================== ===================
==== SIDEBAR 1==== ============ ARTICLE =============== ==== SIDEBAR 2=====
================== ==================================== ===================
================== ==================================== ===================
================== ==================================== ===================
================== ==================================== ===================
===========================================================================
=============================== FOOTER ====================================
===========================================================================
```

### Using CSS Grid
```html
<div class="Holy-Grail-Grid">
	<section class="header">HEADER</section>
	<aside class="left-sidebar">SIDEBAR 1</aside>
	<section class="container article">ARTICLE</section>
	<aside class="right-sidebar">SIDEBAR 2</aside>
	<section class="footer">FOOTER</section>
</div>
```

```css
.Holy-Grail-Grid {
	display: grid;
	grid-template-columns: 100px auto 100px;
	grid-template-rows: repeat(3, 100px);
	grid-gap: 1em;
}

.header, .footer {
	grid-column: 1 / span 3;
}
```

### Using CSS Flexbox
```html
<div class="Holy-Grail-Flex">
	<header class="header">HEADER</header>
	<div class="Container">
		<nav class="left-sidebar">SIDEBAR 1</nav>
		<section class="body">ARTICLE</section>
		<aside class="right-sidebar">SIDEBAR 2</aside>
	</div>
	<footer class="footer">FOOTER</footer>
</div>
```

```css
.Holy-Grail-Flex,
.Container {
	display: flex;
	flex-direction: column;
}

@media(min-width: 768px) {
	.Container {
		flex-direction: row;
		flex: 1;
	}
	.body {
		flex: 1;
	}
	.left-sidebar, .right-sidebar {
		flex: 0 0 12em;
	}
}
```