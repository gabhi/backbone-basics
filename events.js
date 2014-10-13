var object = {};

_.extend(object, Backbone.Events);

object.on("myEvent", function(msg) {
  alert("Triggered " + msg);
});

object.trigger("myEvent", " myEvent event");


 
