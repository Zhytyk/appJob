/**
 * Created by pavel on 7/4/17.
 */
Ext.define('TestApp.model.TestCase', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'disabled', 'failOnError', 'failTestCaseOnError', 'log']
});
