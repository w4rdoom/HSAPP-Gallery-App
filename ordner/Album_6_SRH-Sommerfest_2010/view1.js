/**
* Created by HD-App.
* User: Maximilian Butterer
* Date: 20.06.11
* Time: 15:03
* To change this template use File | Settings | File Templates.
*/

hsapp.views.homeContent = Ext.extend(Ext.Panel, {
    style: "background-color: yellow; color: black;",
    title: "Home",
    html: "<p>Inhalt für die Home-Seite</p>",
    flex: 1,
    iconCls:"info"
});

hsapp.views.searchContent = Ext.extend(Ext.Panel, {
    style: "background-color: blue; color: white;",
    title: "Search",
    html: "<p>Inhalt für die Suche-Seite</p>",
    flex: 1,
    iconCls:"search"
});

hsapp.views.faculties = Ext.extend(Ext.Panel, {
    style: "background-color: light-blue; color: black;",
    title: "Fakultät",
    html: "<p>Inhalt für die Fakultäten-Seite</p>",
    flex: 1,
    iconCls:"team"
});

hsapp.views.GalleryView = Ext.extend(Ext.TabPanel, {
    tabBar:{
        dock: "bottom",
        layout:{
            pack: "center"
        }
    },
//    fullscreen:true,
    flex:1,
    ui:"dark",

    cardSwitchAnimation:{
        type:"slide",
        cover:true
    },
    items:[
        {xtype: "homeContent"},
        {xtype: "faculties"},
        {xtype: "searchContent"}
    ]

});
Ext.reg("GalleryView", hsapp.views.GalleryView);

Ext.reg("homeContent", hsapp.views.homeContent);
Ext.reg("faculties", hsapp.views.faculties);
Ext.reg("searchContent", hsapp.views.searchContent);


