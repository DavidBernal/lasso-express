var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
            name: 'Frank'
        },
        res);
};
