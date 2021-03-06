// dummy/app/application/controller

import Ember from 'ember';

export default Ember.Controller.extend({
  
  gallery: [
    { section: 'General', examples: ['overview']},
    { section: 'Layout & scrolling', examples: [
      'minimal', 'scroll columns'] },
    { section: 'Text columns', examples: [] },
    { section: 'Header & footer', examples: [] },
    { section: 'Column attributes', examples: [] },
    { section: 'Body', examples: [] },
  ],
  columns: [0, 1, 2],
  getRoute(row, rowIndex, {key}) {
    var example = row.examples[key];
    if (example == null) { return null; }
    if (typeof example === 'string') {
      example = { 
        name: example.replace(/ /g, '-'), 
        title: example[0].toUpperCase() + example.slice(1) };
    }
    return example;
  }
});
