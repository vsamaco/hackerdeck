Hackerdeck.Views.SlideView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['slide_view'],

  initialize: function() {
    this.countdown = new Hackerdeck.Views.SlideCountdownView();
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    this.$("#countdown-container").html(this.countdown.render().el);
    this.$('#image-container').html('<img src="http://i.imgur.com/oCP7Pom.jpg" class="img-rounded" style="max-width:100%;display:block;max-height:100%;margin:0 auto;"/>');
  }
});