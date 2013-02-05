Hackerdeck.Views.SidebarControlsView = Backbone.View.extend({
  id: 'sidebar-controls-view',
  template: JST['sidebar_controls_view'],

  events: {
    "click .start" : "startTimer",
    "click .pause" : "pauseTimer",
    "click .stop"  : "stopTimer"
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {

  },

  startTimer: function() {
    console.log('start timer');
  },

  pauseTimer: function() {
    console.log('pause timer');
  },

  stopTimer: function() {
    console.log('stop timer');
  }
});