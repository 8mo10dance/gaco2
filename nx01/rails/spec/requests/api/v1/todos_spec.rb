require 'rails_helper'

RSpec.describe "Api::V1::Todos", type: :request do
  let(:headers) do
    { "ACCEPT" => "application/json" }
  end

  describe "GET /api/v1/todos" do
    subject { get "/api/v1/todos", headers: headers }

    before { create_list :todo, 3 }

    it { is_expected.to eq 200 }
  end

  describe "POST /api/v1/todos" do
    subject(:post_create) do
      post "/api/v1/todos",
           headers: headers,
           params: { todo: todo_params }
    end

    context '正常系' do
      let(:todo_params) { attributes_for :todo }

      it { is_expected.to eq 200 }

      it { expect { post_create }.to change(Todo, :count).by(1) }
    end

    context '準正常系' do
      let(:todo_params) { attributes_for :todo, content: '' }

      it { is_expected.to eq 422 }

      it { expect { post_create }.not_to change(Todo, :count) }
    end
  end

  describe "GET /api/v1/todos/:id" do
    subject { get "/api/v1/todos/#{todo.id}", headers: headers }

    let(:todo) { create :todo }

    it { is_expected.to eq 200 }
  end

  describe "PACTH /api/v1/todos/:id" do
    subject(:patch_update) do
      patch "/api/v1/todos/#{todo.id}",
            headers: headers,
            params: { todo: todo_params }
    end

    let(:todo) { create :todo }

    before { todo }

    context '正常系' do
      let(:todo_params) { attributes_for :todo }

      it { is_expected.to eq 200 }

      it '更新される' do
        patch_update
        expect(todo.reload.content).to eq todo_params[:content]
      end
    end

    context '準正常系' do
      let(:todo_params) { attributes_for :todo, content: '' }

      it { is_expected.to eq 422 }

      it '更新されない' do
        patch_update
        expect(todo.reload.content).not_to eq todo_params[:content]
      end
    end
  end

  describe "DELETE /api/v1/todos/:id" do
    subject(:delete_destroy) do
      delete "/api/v1/todos/#{todo.id}",
             headers: headers
    end

    let(:todo) { create :todo }

    before { todo }

    it { is_expected.to eq 200 }

    it { expect { delete_destroy }.to change(Todo, :count).by(-1) }
  end
end
