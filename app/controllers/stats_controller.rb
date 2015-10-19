class StatsController < ApplicationController
  def index
  end
  
  def logs
    @lines = Array.new
    open("/var/log/syslog", "r") do |file|
      @offset = session[:log_offset].to_i
      @offset ||= 0
      file.seek(@offset)
      file.each_line do |line|
        @lines.push line
      end
      
      session[:log_offset] = file.size
    end
    
    render json: @lines
  end
  
  
  def free
    @free = `free`
    render inline: @free
  end
end
