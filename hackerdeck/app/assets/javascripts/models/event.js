Hackerdeck.Models.Event = Backbone.Model.extend({
  url: function() {
    return '/events/' + this.event_id;
  },

  initialize: function(options) {
    this.event_id = options.event_id;
    this.on('event:stopTime', this.updateTime, this);
  },

  nextTeam: function() {
    var current_team = this.get('current_team');
    this.set('current_team', current_team + 1);
    this.save();
  },

  prevTeam: function() {
    var current_team = this.get('current_team');
    this.set('current_team', current_team == 0 ? 0 : current_team - 1);
    this.save();
  },

  startTimer: function() {
    this.set('status', 'start');
    this.save();
  },

  stopTimer: function() {
    this.set('status', 'stop');
    this.save();
  },

  updateTime: function(time) {
    console.log("update time:" + time);
    this.set('time', time);
    this.save();
  }
});