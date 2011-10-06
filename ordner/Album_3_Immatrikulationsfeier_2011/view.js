hsapp.views.Gallery3View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_7' },
                { cls: 'painting picture_8' },
                { cls: 'painting picture_9' },
            ],
			
			
	
        });
        hsapp.views.Gallery1View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery3", hsapp.views.Gallery3View);