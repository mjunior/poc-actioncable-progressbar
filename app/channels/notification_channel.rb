class NotificationChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notifications_#{params[:batch_name]}"
    puts "notifications_#{params[:batch_name]}"
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def push(data)
    #
  end
end
