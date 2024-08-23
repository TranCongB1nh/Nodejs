var taskRouter = require('./taskRouter');

var router = {
    run: function(req, res) {
        taskRouter.run(req, res);
    }
};

module.exports = router;