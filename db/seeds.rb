10.times do |i|
  PolRe.create(
    name: "Apr 1 – Apr 14, 2020",
    key: "2020-04-#{i+1}T12:00:00",
    value: rand(1001)
  )
end
10.times do |i|
  PolRe.create(
    name: "Previous month",
    key: "2020-03-#{i+1}T12:00:00",
    value: rand(1001)
  )
end
