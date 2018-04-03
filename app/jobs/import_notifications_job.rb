class ImportNotificationsJob < ApplicationJob
  queue_as :default

  def perform(batch_name)
    1000.times do |i|
      sleep(0.2)
      ActionCable.server.broadcast "notifications_#{batch_name}", {processed_lines: i, percent: (i*100.0/1000.0).to_f}
    end
  end
end
