Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  initialize: function() {
    //this.model.on('reset', this.render, this);
    this.model.on('change:time', this.renderTimer, this);
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
    this.renderTimer();
  },

  renderTimer: function() {
    console.log('render timer:' + this.model.get('time'));
    var layout = "<span class='minutes'>{mnn}</span>:<span class='seconds'>{snn}</span>";

    this.$('.time').countdown('destroy').countdown({until: this.model.get('time'), layout: layout});
  },

  updateTimer: function() {
    console.log('update timer');
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