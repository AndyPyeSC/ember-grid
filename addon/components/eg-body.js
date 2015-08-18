import Ember from 'ember';
import EmberGridColumn from './eg-column';
import layout from './eg-body/template';

export default Ember.Component.extend({
  layout: layout,
	classNames: ['body-def'],

  _body: null,
  _column: Ember.computed.alias('parentView._column'),
  offsetY: Ember.computed.alias('_body.offsetY'),

	data: Ember.computed.alias('_body.data'),
  height: Ember.computed.alias('_body.height'),
  width: Ember.computed.alias('_body.width'),
  rowHeight: Ember.computed.alias('_body.rowHeight'),
  requiredPresent: Ember.computed('_body.{data,height,width,rowHeight}', function(){
    var {data, height, width, rowHeight} = this.getProperties(
      'data', 'height', 'width', 'rowHeight' );
    return data != null && height != null && width != null && rowHeight != null;
  }),

  /**
   * Return field data for column given row index.
   *
   * @method field
   * @params rowIndex
   *
   */
  field: function(rowIndex) {
    var {'_column.key': key, '_body.data': data} = this.getProperties(
      '_column.key', '_body.data');
    return data[rowIndex][key];
  },
  didReceiveAttrs: function() {
    this._super();
    var body = this._body;
    if (body == null ) {
      body = Ember.Object.create({});
      this.set('_body', body);
    }
    Ember.merge(body, this.attrs);
  },
  didInsertElement: function() {
    this._super.apply(this, arguments);

  	Ember.run.next(this, function() {
	    var parentView = this.get('parentView');
	    if (parentView instanceof EmberGridColumn) {
        var parentBody = parentView.get('_column._zones.body');
        if( parentBody == null) {
          parentView.set('_column._zones.body', this._body);
          parentBody = this._body;
        }
        else {
          this._body = Ember.merge(parentBody, this._body);
        }
	    	Ember.set(parentBody, 'element', this.get('element'));
	    }
	    //this.get('element').style.display = 'none';
	  });
	}

});