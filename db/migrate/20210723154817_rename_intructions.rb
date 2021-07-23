class RenameIntructions < ActiveRecord::Migration[6.1]
  def change
    rename_column(:posts, :intructions, :instructions)
  end
end
