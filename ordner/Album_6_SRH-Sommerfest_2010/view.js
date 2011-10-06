hsapp.views.Gallery6View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_16' },
                { cls: 'painting picture_17' },
                { cls: 'painting picture_18' },
            ],
			
			
	
        });
        hsapp.views.Gallery6View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery6", hsapp.views.Gallery6View);