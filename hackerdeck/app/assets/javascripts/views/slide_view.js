Hackerdeck.Views.SlideView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['slide_view'],

  initialize: function() {
    this.countdown = new Hackerdeck.Views.SlideCountdownView({model: this.model});
    this.model.on('change', this.render, this);
    this.collection.on('reset', this.render, this);
  },

  getRenderData: function() {
    var current_team_index = this.model.get('current_team');
    var current_team = this.collection.at(current_team_index);
    console.log(current_team);
    return {
      team: current_team ? current_team.toJSON() : ''
    }
  },

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {
    var current_team_index = this.model.get('current_team');
    var current_team = this.collection.at(current_team_index);

    this.$("#countdown-container").html(this.countdown.render().el);
    if(current_team_index) {
      this.$('#image-container').html('<img src="'+ current_team.get('image_url') +'" class="img-rounded" style="max-width:100%;display:block;max-height:100%;margin:0 auto;"/>');
    } else {

    }
  }
});