/**
 * Created by pavel on 7/7/17.
 */
Ext.define('TestApp.store.TestStatusStore', {
    extend: 'Ext.data.Store',
    fields: ['testName', 'active'],
    autoLoad: true,
    storeId: 'TestStatusStore',
    data: [],
    root: {
        text: "Name"
    }
});