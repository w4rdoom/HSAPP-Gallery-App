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

hsapp.views.Viewport = Ext.extend(Ext.NestedList, {
    fullscreen: true,
    title: 'SRH HS App Modul: Gallery',
    store: hsapp.stores.mainstore,
    getDetailCard: function(item, parent) {
        var itemData =  item.attributes.record.data;
        var btnText  = "Back";
        if (item.parent)
            btnText = parent.attributes.record.data.text;
        this.backButton.setText(btnText);    
        switch(itemData.text)
        {
    case "Album_1 Immatrikulationsfeier 2009" : detailCard = hsapp.views.Gallery1View; break;
	  }
    
        return detailCard;
    }
});
