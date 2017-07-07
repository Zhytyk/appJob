/**
 * Created by pavel on 7/4/17.
 */

Ext.define('TestApp.controller.Tests', {
    requires : ["TestApp.helpers.TestStatus"],
    extend: 'Ext.app.Controller',
    views: [
        'TestPanel',
        'LogPanel',
        'TreeList',
        'QueueList'
    ],
    stores: ['SetTestsTreeStore', 'TestStatusStore'],
    models: ['SetTests', 'TestCase'],
    init: function() {
        this.control({
            'viewport queuelist': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function() {
        TestApp.helpers.TestStatus.load();
    }
});