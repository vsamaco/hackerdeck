Hackerdeck.Routers.App = Backbone.Router.extend({
  routes: {
    '': 'home',
  },

  home: function() {
    console.log('route home');
    offset_time = new Date();
    offset_time.setMinutes(offset_time.getMinutes() + 3);
    console.log(offset_time.getTime());

    // this.event = new Hackerdeck.Models.Event({
    //   name: 'Hackathon Developer Week',
    //   current_team: 0,
    //   status: 'stop',
    //   time: offset_time,
    // });
    this.event_id = 1;

    this.event_model = new Hackerdeck.Models.Event({event_id: this.event_id});

    //this.teams = new Hackerdeck.Collections.Teams([
    //   {name: 'team 1', description: 'description 1', image_url: 'http://i.imgur.com/oCP7Pom.jpg'},
    //   {name: 'team 2', description: 'description 2', image_url: 'http://i.imgur.com/oCP7Pom.jpg'},
    //   {name: 'team 3', description: 'description 3', image_url: 'http://i.imgur.com/oCP7Pom.jpg'},
    // ]);
    this.teams = new Hackerdeck.Collections.Teams({event_id: this.event_id});

    this.updateData();
    setInterval(function() { 
      this.updateData()
    }.bind(this), 10000);

    //console.log(teams);

    var appView = new Hackerdeck.Views.AppView({model: this.event_model, collection: this.teams});
    var navigationView = new Hackerdeck.Views.NavigationView();
    $('#navigation-container').html(navigationView.render().el);
    $('#page-container').html(appView.render().el);
  },

  updateData: function() {
    console.log('updating data');
    this.event_model.fetch();
    this.teams.fetch();
  }
});
