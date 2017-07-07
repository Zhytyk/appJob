/**
 * Created by pavel on 7/4/17.
 */
Ext.define('TestApp.model.SetTests', {
    extend: 'Ext.data.Model',
    fields: ['name'],
    hasMany: [{ name: "testCases", model: "TestApp.model.TestCase"}],
    hasOne: [{ name: "initTestCase", model:"TestApp.model.TestCase"}],
});
