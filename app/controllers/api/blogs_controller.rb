class Api::BlogsController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_blog, only: [:show, :update, :destroy]

  def index
    render json: Blog.all.order(created_at: :desc)
  end

  def show
    render json: @blog
  end

  def create
    blog = Blog.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: {errors: blog.errors.full_messages.join(",")}, status: 422
    end
  end

  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: {errors: @blog.errors.full_messages.join(",")}, status: 422
    end
  end

  def destroy
    @blog.destroy
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :body, :author, :category, :image_url)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
