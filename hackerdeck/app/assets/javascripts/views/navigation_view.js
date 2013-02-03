Hackerdeck.Views.NavigationView = Backbone.View.extend({
  id: 'nav-view',
  template: JST['navigation_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {}
});