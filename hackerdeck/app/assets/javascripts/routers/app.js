Hackerdeck.Routers.App = Backbone.Router.extend({
  routes: {
    '': 'home',
  },

  home: function() {
    console.log('route home');
    offset_time = new Date();
    offset_time.setMinutes(offset_time.getMinutes() + 3);
    console.log(offset_time);

    var event = new Hackerdeck.Models.Event({
      name: 'Hackathon Developer Week',
      current_slide: 0,
      status: 'stop',
      time: offset_time,
    });

    var appView = new Hackerdeck.Views.AppView({model: event});
    var navigationView = new Hackerdeck.Views.NavigationView();
    $('#navigation-container').html(navigationView.render().el);
    $('#page-container').html(appView.render().el);
  }
});
