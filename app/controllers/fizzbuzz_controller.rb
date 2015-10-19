class FizzbuzzController < ApplicationController
  def index
    @lines = Array.new
    for num in (1..100)
      line = "#{num}"
      if (num % 3 == 0)
        line << " fizz"        
      end
      if (num % 7 == 0)
        line << " buzz"        
      end
      @lines.push(line)
    end
  end
  
  def ajax_based
    num = params[:num].to_i
    @line = "#{num}"
    if (num % 3 == 0)
      @line << " fizz"        
    end
    if (num % 7 == 0)
      @line << " buzz"        
    end
    
    render inline: @line
  end
end
