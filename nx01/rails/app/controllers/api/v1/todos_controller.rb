class Api::V1::TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.invalid?
      return render json: { messages: @todo.errors.full_messages },
                    status: :unprocessable_entity
    end

    @todo.save!
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.attributes = todo_params

    if @todo.invalid?
      return render json: { messages: @todo.errors.full_messages },
                    status: :unprocessable_entity
    end

    @todo.save!
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    head :ok
  end

  private

  def todo_params
    params.require(:todo).permit(:content)
  end
end
