Hackerdeck.Views.SlideView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['slide_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    
    return this;
  },
});