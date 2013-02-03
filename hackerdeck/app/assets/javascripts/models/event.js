Hackerdeck.Models.Event = Backbone.Model.extend({
  url: function() {
    return '/events/' + this.event_id;
  },

  initialize: function(options) {
    this.event_id = options.event_id;
  }
});