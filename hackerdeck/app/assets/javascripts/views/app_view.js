Hackerdeck.Views.AppView = Backbone.View.extend({
  id: 'app-view',
  template: JST['app_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {}
});