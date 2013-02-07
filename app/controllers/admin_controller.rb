class AdminController < ApplicationController
  layout 'admin'
  def index
    @event = params[:event_id] ? Event.find(params[:event_id]) : Event.all.first
  end
end
