Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  initialize: function() {
    //this.model.on('reset', this.render, this);
    this.model.on('change', this.updateTimer, this);
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

    this.$('.time').countdown({until: this.model.get('time'), layout: layout});
    // if (this.model.get('status') == 'start') {
    //   console.log('countdown start');
    //   this.$('.time').countdown({until: this.model.get('time'), layout: layout}).countdown('pause');
    // } else {
    //   console.log('countdown stop');
    //   this.$('.time').countdown({until: this.model.get('time'), layout: layout}).countdown('pause');
    // }
  },

  updateTimer: function() {
    var layout = "<span class='minutes'>{mnn}</span>:<span class='seconds'>{snn}</span>";

    if (this.model.get('status') == 'start') {
      console.log('update countdown start');
      this.$('.time').countdown('resume');
    } else {
      console.log('update countdown stop');
      this.$('.time').countdown('pause');
    }
  }
});