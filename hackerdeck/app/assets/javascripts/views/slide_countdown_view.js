Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    
    return this;
  },
});