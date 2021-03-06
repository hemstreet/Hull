require('shelljs/global');

var prompt = require('cli-prompt'),
    Mixpanel = require('mixpanel');

var hull = {

    analytics : false,
    mixpanel : null,

    init: function(config) {

        var config = require('./config/config.json');

        if(config.token !== undefined) {
            this.analytics = true;
            this.mixpanel = Mixpanel.init(config.token);
        }

        this.prompt();

    },
    prompt: function() {

        exec('pwd', function(code, output) {
            prompt( '> ', function (command) {
                this.execute(command);
                this.prompt();

            }.bind(this));
        }.bind(this));


    },
    execute: function(command) {

        var data = {
            "command" : command
        };

        if(this.analytics) {
            this.track(command.split(" ")[0], data);
        }

        exec(command);
    },
    track: function(name, data) {

        this.mixpanel.track(name, data);

    }
};

hull.init();