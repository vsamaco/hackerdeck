Hackerdeck.Views.TeamMetaView = Backbone.View.extend({
  id: 'team-meta-view',
  template: JST['team_meta_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    
    return this;
  },
});