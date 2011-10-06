Ext.regApplication({
    name: 'hsapp',
    launch: function() {
        console.log('Launching Application...');
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        
        this.views.viewport = new this.views.Viewport();         
    }
});

hsapp.stores.mainstore_data = {
    text: 'Ordner',
    items: [
        
	{
		text: "Album_1 Immatrikulationsfeier 2009", 
		leaf: true
	},
	    ]
};

	Ext.regModel('hsapp.stores.mainstore_model', {
    fields: [{name: 'text', type: 'string'}]
});

hsapp.stores.mainstore = new Ext.data.TreeStore({
    model: 'hsapp.stores.mainstore_model',
    root: hsapp.stores.mainstore_data,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});