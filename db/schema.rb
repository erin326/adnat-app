# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_13_081328) do
  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.integer "hourly_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shifts", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "start"
    t.datetime "finish"
    t.integer "break_length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "hours_worked", precision: 5, scale: 2
    t.decimal "shift_cost", precision: 5, scale: 2
    t.integer "organization_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "organization_id"
    t.string "username"
    t.string "email_address"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_reset_token"
    t.datetime "password_reset_sent_at"
  end

end
