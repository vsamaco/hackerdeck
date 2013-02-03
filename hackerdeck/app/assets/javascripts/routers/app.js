Hackerdeck.Routers.App = Backbone.Router.extend({
  routes: {
    '': 'home',
  },

  home: function() {
    console.log('route home');
    var appView = new Hackerdeck.Views.AppView();
    $('#page-container').html(appView.render().el);
    //$('#navigation-container').html(application.navigationView.render().el);
  }
});
