define([
    'jquery',
    'underscore',
    'backbone',
    'models/location'
], function($, _, Backbone, ObiLocation) {

    'use strict';

    return Backbone.View.extend({

        el: $(".obi-location"),

        template: _.template($('#obiLocation').html()),

        initialize: function () {
            this.model = new ObiLocation();
            var self = this;
            var socket = new WebSocket('ws://jedi.smartjs.academy');

            socket.onmessage = function (event) {
                self.model.setLocation(JSON.parse(event.data).name);
                self.render();
            };

            this.render();
        },

        render: function () {
            $(this.el).html(this.template({location: this.model.getLocation()}));
        }
    });

});