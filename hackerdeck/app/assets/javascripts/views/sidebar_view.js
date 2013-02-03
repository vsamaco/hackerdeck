Hackerdeck.Views.SidebarView = Backbone.View.extend({
  id: 'sidebar-view',
  template: JST['sidebar_view'],

  initialize: function() {
    this.teams = new Hackerdeck.Views.SidebarTeamsView({
      model: this.model,
      collection: this.collection
    });
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    this.$('#teams-container').html(this.teams.render().el);
  }
});