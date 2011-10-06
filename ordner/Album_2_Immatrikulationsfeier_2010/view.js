hsapp.views.Gallery2View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
				{ cls: 'painting picture_4' },
				{ cls: 'painting picture_5' },
				{ cls: 'painting picture_6' },
            ],
			
			
	
        });
        hsapp.views.Gallery1View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery2", hsapp.views.Gallery2View);