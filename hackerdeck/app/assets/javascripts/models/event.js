Hackerdeck.Models.Event = Backbone.Model.extend({
  url: function() {
    return '/events/' + this.event_id;
  },

  initialize: function(options) {
    this.event_id = options.event_id;
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
  }
});