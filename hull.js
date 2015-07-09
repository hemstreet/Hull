require('shelljs/global');

var prompt = require('cli-prompt'),
    Mixpanel = require('mixpanel');

var hull = {

    mixpanel : null,

    init: function() {

        var config = require('./config/config.json');

        this.mixpanel = Mixpanel.init(config.token);

        this.prompt();

    },
    prompt: function() {

        prompt('$ ', function (command) {
            console.log('');
            this.execute(command);
            console.log('');
            this.prompt();
        }.bind(this));

    },
    execute: function(command) {
        var data = {
            "command" : command
        };

        this.track(command.split(" ")[0], data);

        exec(command);
    },
    track: function(name, data) {

        this.mixpanel.track(name, data);

    }
};

hull.init();