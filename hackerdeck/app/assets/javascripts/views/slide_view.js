Hackerdeck.Views.SlideView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['slide_view'],

  initialize: function() {
    this.countdown = new Hackerdeck.Views.SlideCountdownView({model: this.model});
    this.model.on('change', this.render, this);
    this.model.on('reset', this.render, this);
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

    if(current_team) {
      this.$("#countdown-container").html(this.countdown.render().el);
      this.$('#image-container').html('<img src="'+ current_team.get('image_url') +'" class="img-rounded" style="max-width:100%;display:block;max-height:100%;margin:0 auto;"/>');
    } else {

    }
  }
});