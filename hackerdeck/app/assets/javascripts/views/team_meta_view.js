Hackerdeck.Views.TeamMetaView = Backbone.View.extend({
  id: 'team-meta-view',
  template: JST['team_meta_view'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    var current_team = this.model.get('current_team');
    this.$('.title').html(this.collection.at(current_team).get('name'));
    this.$('.team-index').html(current_team + 1);
  }
});