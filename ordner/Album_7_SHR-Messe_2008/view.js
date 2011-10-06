hsapp.views.Gallery7View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_19' },
                { cls: 'painting picture_20' },
                { cls: 'painting picture_21' },
            ],
			
			
	
        });
        hsapp.views.Gallery7View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery7", hsapp.views.Gallery7View);