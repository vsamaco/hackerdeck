Hackerdeck.Views.SidebarTeamsView = Backbone.View.extend({
  id: 'sidebar-teams-view',
  template: JST['sidebar_teams_view'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('change', this.render, this);
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
    this.collection.forEach(this.addTeam);
  },

  addTeam: function(team) {
    this.$('.team-list').append('<li>' + team.get('name') + '</li>');
  }
});