/**
 * Created by pavel on 7/4/17.
 */

Ext.define('TestApp.store.SetTestsTreeStore', {
    extend: 'Ext.data.TreeStore',
    model: 'TestApp.model.SetTests',
    autoLoad: true,
    storeId: 'SetTestsTreeStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/data.json',
        reader: {
            type: 'json',
            root: 'root'
        }
    },
    listeners: {
        append: function (currentNode, newNode) {
            var testCount, testCases, testCase, testCaseNode, i;

            if( newNode.isRoot()) {
                return newNode.set("text", "Root");
            }
            if( newNode.getDepth() !== 1) {
                return;
            }
            newNode.set("text", newNode.get("name"));
            newNode.set("checked", false);
            testCases = newNode.testCases();
            testCount = testCases.getCount();

            for (i = 0; i < testCount; i++) {
                testCase = testCases.getAt(i).get("name");
                testCaseNode = newNode.copy();

                testCaseNode.set("text", testCase);
                testCaseNode.set("checked", false);
                testCaseNode.set("leaf", true);

                newNode.appendChild(testCaseNode);
            }
       }
    },
    root: {
        text: "Name"
    }
});