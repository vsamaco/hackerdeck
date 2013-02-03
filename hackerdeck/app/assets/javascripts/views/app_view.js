Hackerdeck.Views.AppView = Backbone.View.extend({
  id: 'app-view',
  template: JST['app_view'],

  initialize: function() {
    this.slideView = new Hackerdeck.Views.SlideView({model: this.model});
    this.sidebarView = new Hackerdeck.Views.SidebarView({model: this.model, collection: this.collection});
    this.teamMetaView = new Hackerdeck.Views.TeamMetaView({model: this.model, collection: this.collection});

    this.model.on('change:name', this.render, this);
  },

  getRenderData: function() {
    return {
      event: this.model.toJSON()
    }
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    console.log('after render');
    this.$('#slide-container').html(this.slideView.render().el);
    this.$('#sidebar-container').html(this.sidebarView.render().el);
    this.$('#team-meta-container').html(this.teamMetaView.render().el);
  }
});