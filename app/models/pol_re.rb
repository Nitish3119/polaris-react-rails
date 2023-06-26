class PolRe < ApplicationRecord
  validates :name, presence: true
  validates :key, presence: true
  validates :value, presence: true
end
