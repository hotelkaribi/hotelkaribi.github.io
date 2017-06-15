var Videoplayer = Class.create({

	initialize: function(number, options){
		this.suppliedOptions = options;
		this.defaultOptions = $H({
		  autoPlay: true,
		  wrapper: 'video'
		});
		this.getSource(number);
		this.video();
		this.startObserving();
	},
	getSource: function (number)
	{

		switch(number) {
			case 4:
				this.srcOne = '/video/movie_4.m4v';
				this.srcTwo = '/video/movie_4.ogv';
				break;
			case 3:
				this.srcOne = '/video/movie_4.m4v';
				this.srcTwo = '/video/movie_4.ogv';
				break;
			case 2:
				this.srcOne = '/video/movie_4.m4v';
				this.srcTwo = '/video/movie_4.ogv';
				break;
			default:
				this.srcOne = '/video/movie_4.m4v';
				this.srcTwo = '/video/movie_4.ogv';
				break;
		}
      

	},
	video: function ()
	{
		
		var dimensions = this.getVideoDimensions();
		
		this.video = new Element('video',{width:dimensions[0],height:dimensions[1]});
		this.video.preload = true;this.video.autoplay = true; this.video.loop = true;this.video.autobuffer = true;
		var srcOne = new Element('source',{src:this.srcOne,type:'video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'});
		var srcTwo = new Element('source',{src:this.srcTwo,type:'video/ogg; codecs=\"theora, vorbis\"'});
		this.video.insert(srcOne);this.video.insert(srcTwo); $('video').insert(this.video);
	},
	startObserving: function ()
	{
		Event.observe(window, 'resize', function(e){
			dimensions = this.getVideoDimensions();
			this.video.width = dimensions[0];
			this.video.height = dimensions[1];
		}.bind(this));
		
		this.loopVideo();
		
		$$('.playControl').first().observe('click',this.playControl.bindAsEventListener(this));
	},
	
	
	
	getVideoDimensions: function ()
	{
		var windowWidth = document.viewport.getWidth(); var windowHeight = $('content').getHeight(); windowProportion = windowWidth / windowHeight;
		var origWidth = 480; origHeight = 270; var origProportion = origWidth / origHeight;
		var newWidth = 0; var newHeight = 0;
		if (windowProportion >= origProportion) {
			proportion = windowWidth / origWidth;
		} else {
			proportion = windowHeight / origHeight;
		}
		newWidth = proportion * origWidth; newHeight = proportion * origHeight;
		//console.log('Window Height:%s, newWidth: %s, newHeight: %s',windowHeight,newWidth,newHeight);
		return [newWidth,newHeight]
	},
	
	playControl: function ()
	{
		if (this.video.paused == false) {
			this.video.pause();
			$$('.playControl').first().innerHTML = "Play";
		} else {
			this.video.play();
			$$('.playControl').first().innerHTML = "Pause";
		}
	},
	
	loopVideo: function ()
	{
		this.t = window.setInterval(function() {
			if (this.video.ended == true) {
				this.video.play();
			}
		}.bind(this),500);
	}

});