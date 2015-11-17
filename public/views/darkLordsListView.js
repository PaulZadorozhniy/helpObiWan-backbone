define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    'use strict';

    return Backbone.View.extend({

        el: $(".lord-list"),

        template: _.template($('#lordList').html()),

        initialize: function () {
            //this.model = new ObiLocation();
            //var self = this;
            //var socket = new WebSocket('ws://jedi.smartjs.academy');
            //
            //socket.onmessage = function(event) {
            //  self.model.setLocation(JSON.parse(event.data).name);
            //  self.render();
            //};

            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
        }
    });

});