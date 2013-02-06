Hackerdeck.Collections.Teams = Backbone.Firebase.Collection.extend({
  model: Hackerdeck.Models.Team,
  firebase: "https://vsamaco.firebaseio.com/hackerdeck",

  initialize: function(options) {
    //this.event_id = options.event_id;
  }
});