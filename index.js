function theBeatlesPlay(musicians, instruments) {
  
   array = []
  for (var i = 0;i < musicians.length ;i++) {
    musicians[i] = "John Lennon"
    instruments[i] = " plays guitar"
    array[i] = musicians[i] + instruments[i]
  }
}

function johnLennonFacts(facts) {
  while (facts.length > 0) {
    
    --facts.length
  }
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
  } while (number < 15) {
    number++
  }
  return array
}