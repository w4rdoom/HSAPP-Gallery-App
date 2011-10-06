hsapp.views.GalleryView = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'horizontal',
            items: [
               
                { cls: 'painting template' },
                { cls: 'painting standing' },
                { cls: 'painting sitting' },
                { html : '<a><img src="http://src.sencha.io/http://www.letsgodigital.org/images/artikelen/579/lg-viewty-test.jpg"/></a>' },
            ],
			
			
	
        });
        hsapp.views.GalleryView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg("Gallery", hsapp.views.GalleryView);