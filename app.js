// Applikation aufrufen
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

// Ordnerstruktur - Liste
hsapp.stores.mainstore_data = {
    text: 'ordner',
    items: [
        
	{
		text: "Album_1 Immatrikulationsfeier 2009", 
		leaf: true
	},

	
	{
		text: "Album_2 Immatrikulationsfeier 2010", 
		leaf: true
	},

	
	{
		text: "Album_3 Immatrikulationsfeier 2011", 
		leaf: true
	},

	
	{
		text: "Album_4 Bachelorabschlussparty 2011", 
		leaf: true
	},

	
	{
		text: "Album_5 SRH-Sommerfest 2011", 
		leaf: true
	},

	
	{
		text: "Album_6 SRH-Sommerfest 2010", 
		leaf: true
	},

	
	{
		text: "Album_7 SHR-Messe 2008", 
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
	// Ordner registrieren und buttons zuweisen
    case "Album_1 Immatrikulationsfeier 2009" : detailCard = hsapp.views.Gallery1View; break;
	case "Album_2 Immatrikulationsfeier 2010" : detailCard = hsapp.views.Gallery2View; break;
	case "Album_3 Immatrikulationsfeier 2011" : detailCard = hsapp.views.Gallery3View; break;
	case "Album_4 Bachelorabschlussparty 2011" : detailCard = hsapp.views.Gallery4View; break;
	case "Album_5 SRH-Sommerfest 2011" : detailCard = hsapp.views.Gallery5View; break;
	case "Album_6 SRH-Sommerfest 2010" : detailCard = hsapp.views.Gallery6View; break;
	case "Album_7 SHR-Messe 2008" : detailCard = hsapp.views.Gallery7View; break;
	
        }
    
        return detailCard;
    }
});
