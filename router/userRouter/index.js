var routerMethods = require("../methods")

var routes = require("../route");
const {
  createListTask,
  getListTask,
  deleteListTask,
  updateListTask,
} = require("../../controller/tasks");

var userRouter = {
    run(req, res) {
        routerMethods.get(req, res, routes.tasks.value, getListTask);
        routerMethods.post(req, res, routes.tasks.value, createListTask);
        routerMethods.delete(req, res, routes.tasks.value, deleteListTask);
        routerMethods.patch(req, res, routes.tasks.value, updateListTask);
    },
}

module.exports = userRouter