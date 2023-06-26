Rails.application.routes.draw do
  get 'barchart', to: 'polaris#barchart'
  get 'donutchart', to: 'polaris#donutchart'
  get 'linechart', to: 'polaris#linechart'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "polaris#index"
end
