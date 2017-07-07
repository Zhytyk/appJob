/**
 * Created by root on 7/6/17.
 */

Ext.Loader.setConfig({
    disableCaching  : false
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TestApp',
    appFolder: 'app',
    controllers: ['Tests'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'testpanel',
                flex: 2,
                collapsible: true
            }, {
                xtype: 'splitter'
            }, {
                xtype: 'logpanel',
                flex: 1
            }]
        });
    }
});
