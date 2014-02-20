class ProdutoController < ApplicationController

  before_filter :initialize_produto
  
  def initialize_produto
    @produto = params[:param]
  end
  
end
