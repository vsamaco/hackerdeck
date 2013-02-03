Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  initialize: function() {
    this.model.on('reset', this.render, this);
    this.model.on('change', this.render, this);
  },

  getRenderData: function() {
    return this.model.toJSON();
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    var layout = "<span class='minutes'>{mnn}</span>:<span class='seconds'>{snn}</span>";

    if (this.model.get('status') == 'start') {
      console.log('countdown start');
      this.$('.time').countdown({until: this.model.get('time'), layout: layout});
    } else {
      console.log('countdown stop');
      this.$('.time').countdown({until: this.model.get('time'), layout: layout}).countdown('pause');
    }
  }
});