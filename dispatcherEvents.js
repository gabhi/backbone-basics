var dispatcher = _.clone(Backbone.Events);

dispatcher.on("myEvent", function(msg) {
  alert("Dispatcher Triggered " + msg);
});

dispatcher.trigger("myEvent", " myEvent event");
