Hackerdeck.Views.SlideCountdownView = Backbone.View.extend({
  id: 'countdown-view',
  template: JST['slide_countdown_view'],

  initialize: function() {
    //this.model.on('reset', this.render, this);
    this.model.on('change:time', this.renderTimer, this);
    this.model.on('change', this.updateTimer, this);
    this.model.on('change:status', this.reportTime, this);
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

  reportTime: function() {
    var countdown_time = this.$('.time').countdown('getTimes');
    var countdown_time_seconds = this.convertToSeconds(countdown_time);
    console.log("gettimes:" + countdown_time);
    if (countdown_time_seconds > 0 && this.model.get('status') == "stop") {
      this.model.trigger('event:stopTime', countdown_time_seconds);
    }
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
  },

  convertToSeconds: function(time_array) {
    var seconds = 0;
    time_array.forEach(function(period, idx) {
      switch(idx) {
        case 6: // seconds
          seconds += period;
          break;
        case 5: // minutes
          seconds += period * 60;
          break;
        case 4: // hours
          seconds += period * 60 * 60;
          break;
        case 3: // days
          seconds += period * 60 * 60 * 24;
          break;
        case 2: // weeks
          seconds += period * 60 * 60 * 24 * 7;
          break;
        case 1: // months
          seconds += period * 60 * 60 * 24 * 7 * 30;
          break;
        case 0: // years
          seconds += period * 60 * 60 * 24 * 7 * 30 * 12;
          break;
        default:
          break;
      }
    });

    return seconds;
  }
});