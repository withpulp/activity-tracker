SyncedCron.add({
  name: 'Crunch some important numbers for the marketing department',  
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 5 sec');
  },
  job: function() {
    var numbersCrunched = "fart";
    console.log(numberscrunched);
  }
});

SyncedCron.start();
