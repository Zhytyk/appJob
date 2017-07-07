/**
 * Created by pavel on 7/7/17.
 */
Ext.define("TestApp.helpers.TestStatus", {
    singleton : true,
    load: function () {
        var task = new Ext.util.DelayedTask(function () {
            Ext.Ajax.request({
                url: 'app/data/status.json',
                success: function (response) {
                    var response = Ext.decode(response.responseText);

                    var store = Ext.getStore("TestStatusStore");
                    store.loadData(response.root);
                    
                    task.delay(2000);
                }
            });
        });
        task.delay(0);
    }
});