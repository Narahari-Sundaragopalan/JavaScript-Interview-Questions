```html
<div class="carousel slide" id="myCarousel" data-ride="carousel">
	<ol class="carousel-indicators">
		<li class="carousel-indicator active" data-slide-to="0" data-target="#myCarousel"></li>
		<li class="carousel-indicator" data-slide-to="1" data-target="#myCarousel"></li>
		<li class="carousel-indicator" data-slide-to="2" data-target="#myCarousel"></li>
	</ol>

	<div class="carousel-images-wrapper">
		<div class="item active">
			<img src="sweden.jpg" alt="View of Stockholm Sweden"/>
		</div>
		<div class="item">
			<img src="norway.jpg" alt="Norway image"/>
		</div>
		<div class="item">
			<img src="denmark.jpg" alt="Denmark image"/>
		</div>
	</div>

	<a class="carousel-control" href="#myCarousel" data-slide="prev">
		<span class="icon-left"></span>
		<span class="control-text">Previous</span>
	</a>
	<a class="carousel-control" href="#myCarousel" data-slide="next">
		<span class="icon-right"></span>
		<span class="control-text">Next</span>
	</a>
</div>
```