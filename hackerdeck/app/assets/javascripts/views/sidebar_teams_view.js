Hackerdeck.Views.SidebarTeamsView = Backbone.View.extend({
  id: 'sidebar-teams-view',
  template: JST['sidebar_teams_view'],

  initialize: function() {
    this.collection.on('add', this.addTeam, this);
    this.model.on('change:current_team', this.setCurrentTeam, this);
  },

  getRenderData: function() {
    return {
      teams: this.collection.toJSON()
    }
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    this.addTeams();
  },

  addTeams: function() {
    this.$('.team-list').empty();
    this.collection.forEach(this.addTeam, this);
  },

  addTeam: function(team) {
    var index = this.$('li').length;
    var view = new Hackerdeck.Views.SidebarTeamView({model: team, index: index, current_index: false});
    this.$('.team-list').append(view.render().el);
  },

  setCurrentTeam: function() {

  }
});