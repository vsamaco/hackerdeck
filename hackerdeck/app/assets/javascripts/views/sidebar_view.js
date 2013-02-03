Hackerdeck.Views.SidebarView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['sidebar_view'],

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    
    return this;
  },
});