# frozen_string_literal: true
class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :url
      t.string :title
      t.string :date
      t.string :source

      t.references :campaign_page, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
