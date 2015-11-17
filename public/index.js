require.config({
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone'
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'views/darkLordsListView',
    'views/obiWanLocation'
    ],
    function($, _, B, DarkLordsListView, ObiWanLocation) {

        $(function() {
            new ObiWanLocation();
            new DarkLordsListView();
        });

    }
);