hsapp.views.Gallery4View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_10' },
                { cls: 'painting picture_11' },
                { cls: 'painting picture_12' },

            ],
			
			
	
        });
        hsapp.views.Gallery4View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery4", hsapp.views.Gallery4View);