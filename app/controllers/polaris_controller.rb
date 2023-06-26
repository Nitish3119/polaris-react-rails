class PolarisController < ApplicationController
  def index
  end

  def barchart
    @pol= PolRe.order(:created_at).first(15)
    render json: @pol
  end

  def donutchart
    @pol= PolRe.where(:id => 16..19)
    render json: @pol
  end

  def linechart
    @pol = PolRe.order(:created_at).last(20)
    render json: @pol
  end
end
