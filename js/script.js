
$(document).ready(function() {


	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'assets/cloud.mp4',
		ogv:'assets/cloud.ogv',
		webm:'assets/cloud.webm',
		wmv:'assets/cloud.wmv',
		poster:'assets/cloud.jpg',
		opacity:1,
		fullscreen:true,
	});
	
	
	$('#div_demo').videoBG({
		mp4:'assets/cloud.mp4',
		ogv:'assets/cloud.ogv',
		webm:'assets/cloud.webm',
		wmv:'assets/cloud.wmv',
		poster:'assets/cloud.jpg',
		scale:true,
		zIndex:0
	});
	
	
	$('#text_replacement_demo').videoBG({
		mp4:'assets/cloud.mp4',
		ogv:'assets/cloud.ogv',
		webm:'assets/cloud.webm',
		wmv:'assets/cloud.wmv',
		poster:'assets/cloud.jpg',
		textReplacement:true,
		width:760,
		height:24
	});
		
})