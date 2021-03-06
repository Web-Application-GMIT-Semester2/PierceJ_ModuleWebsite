<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>
<!-- One -->
<section id="one" class="wrapper special">
	<div class="inner">
		<header class="major">
			<h2>Week Six</h2><br>
			<h3>This week we looked at AJAX.</h3>
			<h1>Lectures and Three Labs on AJAX (XML, JSON and HTML).</h1>
		</header>
		<div class="features">
			<div class="feature" ng-repeat="lab in labsArr.slice(50,58)">
				<a href={{lab.link}}><i class="{{lab.icon}}"></i></a>
				<h3>{{lab.week}}</h3>
				<p>{{lab.desc}}</p>
			</div>
		</div>
	</div>
</section>
<?php
include './assets/templates/overallFooter.php';
?>
