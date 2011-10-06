hsapp.views.Gallery5View = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting picture_13' },
                { cls: 'painting picture_14' },
                { cls: 'painting picture_15' },

            ],
			
			
	
        });
        hsapp.views.Gallery5View.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery5", hsapp.views.Gallery5View);