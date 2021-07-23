class CategoriesController < ApplicationController
  before_action :set_categories, only: [:show]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_categories
    @category = Category.find(params[:id])
  end
end
