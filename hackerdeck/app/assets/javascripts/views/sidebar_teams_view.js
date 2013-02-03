Hackerdeck.Views.SidebarTeamsView = Backbone.View.extend({
  id: 'sidebar-teams-view',
  template: JST['sidebar_teams_view'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  getRenderData: function() {
    return {
      teams: this.collection.toJSON()
    }
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    //this.afterRender();
    return this;
  },

  afterRender: function() {
    //this.$('.team-list').html('AFTER');
  },

  addTeams: function() {
    this.$('.team-list').empty();
    this.collection.forEach(this.addTeam);
  },

  addTeam: function(team) {
    console.log('add team:' + team.get('name'));
    this.$('.team-list').append('<li>' + team.get('name') + '</li>');
  }
});