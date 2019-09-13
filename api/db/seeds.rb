counter = 0
30.times do
  counter +=1 
  Message.create(title: "Message #{counter}", content: "Content message #{counter}")
  p "Record #{counter} created" if  Message
end






