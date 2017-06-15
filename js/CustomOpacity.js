var CustomOpacity = Class.create({
  
	initialize: function(options){
		this.defaults = $H({
			opacityHigh: 1.0,
			opacityLow: 0.0,
			elements: '',
			name: 'random'
		});
		this.settings = this.defaults.merge(options).toObject();
		this.init();
	},
	init: function () {
		$$(this.settings.elements).each( function (e,i){
			e.observe('mouseover',this.toggle.bindAsEventListener(this,'mouseover',this.settings.name+'_'+i));
			e.observe('mouseout',this.toggle.bindAsEventListener(this,'mouseout',this.settings.name+'_'+i));
		}.bind(this));
	},
	toggle: function (e,type,name) {
		element = e.findElement('div');
		e.stop();
		switch ( type ) {
			case 'mouseover':
				var queue = Effect.Queues.get(name);
				queue.each(function(effect) { effect.cancel(); });
				new Effect.Opacity( element, {
					to: this.settings.opacityHigh,
					duration:0.4,
					queue: {  scope: name, limit:1 }
				});
				break;
			case 'mouseout':
				var queue = Effect.Queues.get(name);
				queue.each(function(effect) { effect.cancel(); });
				new Effect.Opacity( element, {  
					  to: this.settings.opacityLow,
					  duration:0.4,
					  queue: {  scope: name, limit:1 }
				});
				break;
		}
	}
});