Hackerdeck.Views.SidebarTeamView = Backbone.View.extend({
  className: 'sidebar-team-view',
  tagName: 'li',
  template: JST['sidebar_team_view'],

  initialize: function() {
    this.index = this.options.index;

    this.model.on('remove', this.remove, this);
  },

  getRenderData: function() {
    return {
      team: this.model.toJSON(),
      index: this.index
    };
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {

  }
});