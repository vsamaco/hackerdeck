Hackerdeck.Views.AppView = Backbone.View.extend({
  id: 'app-view',
  template: JST['app_view'],

  initialize: function() {
    this.slideView = new Hackerdeck.Views.SlideView();
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    console.log('after render');
    this.$('#slide-container').html(this.slideView.render().el);
  }
});