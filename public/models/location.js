var ObiLocation = Backbone.Model.extend({
  location: '',
  getLocation: function() {
    return this.location;
  },
  setLocation: function(location) {
    console.log(location);
    this.location = location;
  }
});

//window.obiLocation = new Location;