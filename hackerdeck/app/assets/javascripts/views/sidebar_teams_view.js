Hackerdeck.Views.SidebarTeamsView = Backbone.View.extend({
  id: 'sidebar-teams-view',
  template: JST['sidebar_teams_view'],

  initialize: function() {
    //this.collection.on('reset', this.addTeams, this);
    this.collection.on('add', this.addTeam, this);
    //this.collection.on('all', this.render, this);
    this.model.on('change:current_team', this.render, this);
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
    var current_badge = index == this.model.get('current_team') ? 'badge badge-success' : 'badge'
    var index_badge = '<span class="'+ current_badge +'">' + (index + 1) + '</span>';
    this.$('.team-list').append('<li>' + index_badge + team.get('name') + '</li>');
  }
});