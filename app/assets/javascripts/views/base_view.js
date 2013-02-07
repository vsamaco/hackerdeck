Hackerdeck.Views.BaseView = Backbone.View.extend({
  initialize: function() {
    this.render = _.bind(this.render, this);
  },

  template: function() {},
  getRenderData: function() {},

  render: function() {
    console.log('base render');
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {}
});
