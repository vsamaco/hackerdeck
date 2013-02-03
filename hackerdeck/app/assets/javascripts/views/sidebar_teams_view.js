Hackerdeck.Views.SidebarTeamsView = Backbone.View.extend({
  id: 'sidebar-teams-view',
  template: JST['sidebar_teams_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    
    return this;
  },
});