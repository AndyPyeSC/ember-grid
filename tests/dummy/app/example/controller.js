// Dummy Application Controller.

import Ember from 'ember';
import generateData from 'dummy/utils/generate-data';

export default Ember.Controller.extend({
  queryParams: ['name'],

  data: generateData(500, {
    name: 'name', 
    age: {name: 'age', options: {type: 'adult'}},
    salary: {name: 'dollar', options: {min: 0, max: 200000, fixed: 2}},
    email: {name: 'email', options: {domain: 'example.com'}}
    }, 4359),

  dollarSalary: function(row) {
    return '$'+row.salary.toFixed(2);
  },

  averageSalary: Ember.computed('gridRows.@each.salary', function() {
    var salaries = this.get('gridRows').map(function(row) {return row.salary;});
    if (salaries)
    {
      var sum = salaries.reduce(function(a, b){return a+b;});
      return 'AVG $' + (sum / salaries.length).toFixed(2);
    }
    else
    {
      return null;
    }
  }),

  template: Ember.computed('name', function() {
    this.get(this._templates[this.get('name')]);
  }),

  _templates: {
    simple: `
      {{#ember-grid width=800 height=200 rowHeight=25 data=data showFooter=true }}

        {{#eg-column 
            key="name" width=250 header="Name" footer="Footer text" 
            min-width=150 max-width=300 align="center"}}
          
          {{#eg-body as |field rowIndex column|}}
            {{rowIndex}}: <strong>{{field}}</strong>
          {{/eg-body}}

        {{/eg-column}}

        {{eg-column key="age" width=50 footer="Age Footer" resizable=false align="center"}}

        {{eg-column key="age" width=50 footer="Age Footer" resizable=false align="center"}}

        {{#eg-column key="salary" field=dollarSalary width=80 header="Salary" footer=averageSalary align="right"}}
          
          {{#eg-header as |column|}}
            <span style="text-align: right;display: block; color:yellow">{{column.header}}</span>
          {{/eg-header}}
          {{#eg-footer as |column|}}{{column.header}}{{/eg-footer}}

        {{/eg-column}}

        {{eg-column key="email" width=150 header="Email" footer="Email Footer"}}
      {{/ember-grid}}`  
   }
});
