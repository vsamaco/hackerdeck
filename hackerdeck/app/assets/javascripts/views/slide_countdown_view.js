Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  getRenderData: function() {
    return this.model.toJSON();
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    this.$('.time').countdown({until: this.model.get('time'), layout: "<span class='minutes'>{mnn}</span>:<span class='seconds'>{snn}</span> "});
  }
});