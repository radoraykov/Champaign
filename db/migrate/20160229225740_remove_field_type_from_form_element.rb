# frozen_string_literal: true
class RemoveFieldTypeFromFormElement < ActiveRecord::Migration
  def change
    remove_column :form_elements, :field_type
  end
end
