Hackerdeck.Views.TeamMetaView = Backbone.View.extend({
  id: 'team-meta-view',
  template: JST['team_meta_view'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.model.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.model.on('change:current_team', this.render, this);
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    var current_team_index = this.model.get('current_team');
    var current_team = this.collection.at(current_team_index);
    if (current_team) {
      this.$('.team-name').html(current_team.get('name'));
      this.$('.team-index').html(current_team_index + 1);
      this.$('.team-description').html(current_team.get('description'));
    } else {
      this.$('.team-name').html('---');
      this.$('.team-index').html('');
      this.$('.team-description').html('');
    }
  }
});