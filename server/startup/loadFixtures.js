function loadFixture(fixtures, collection) {  var i;  for (i = 0; i < fixtures.length; i+= 1) {    //collection.remove({ });    collection.insert(fixtures[i]);  }}Meteor.startup(function () {  if (Quotes.find().count() === 0) {    loadFixture(Fixtures['quotes'], Quotes);  }  if (Standings.find().count() === 0) {    loadFixture(Fixtures['standings'], Standings);  }});