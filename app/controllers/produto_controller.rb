class ProdutoController < ApplicationController

  respond_to :html, :js 
  
  before_filter :initialize_produto
  
  def initialize_produto
    @produto = params[:param]
  end
  
end
