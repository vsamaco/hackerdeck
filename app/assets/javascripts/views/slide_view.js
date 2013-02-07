Hackerdeck.Views.SlideView = Backbone.View.extend({
  id: 'slide-view',
  template: JST['slide_view'],

  initialize: function() {
    this.countdown = new Hackerdeck.Views.SlideCountdownView({model: this.model});
    //this.model.on('change', this.render, this);
    this.collection.on('reset', this.renderSlide, this);
    //this.collection.on('reset', this.test, this);
  },

  getRenderData: function() {
    var current_team_index = this.model.get('current_team');
    var current_team = this.collection.at(current_team_index);
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
    this.$("#countdown-container").html(this.countdown.render().el);
  },

  renderSlide: function() {
    var current_team_index = this.model.get('current_team');
    var current_team = this.collection.at(current_team_index);

    if(current_team && current_team.get('image_url')) {
      this.$('#image-container').html('<img src="'+ current_team.get('image_url') +'" class="img-rounded" style="max-width:100%;display:block;max-height:100%;margin:0 auto;"/>');
    }
  },

  test: function() {
    console.log('test call');
  }
});