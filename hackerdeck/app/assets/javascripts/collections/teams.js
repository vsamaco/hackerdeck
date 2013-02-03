Hackerdeck.Collections.Teams = Backbone.Collection.extend({
  model: Hackerdeck.Models.Team,
  url: function() {
    return '/events/' + this.event_id + '/teams';
  },

  initialize: function(options) {
    this.event_id = options.event_id;
  }
});