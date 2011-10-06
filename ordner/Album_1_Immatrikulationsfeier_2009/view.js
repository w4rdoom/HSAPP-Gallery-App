hsapp.views.Gallery1View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_1' },
                { cls: 'painting picture_2' },
                { cls: 'painting picture_3' },

            ],
			
			
	
        });
        hsapp.views.Gallery1View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallerysad1", hsapp.views.Gallery1View);