const { StatusCode} = require("../../utils.js");

function getListTask(request, response) {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end("Get all list task");
};
function createListTask(request, response) {
    response.writeHead(StatusCode.OK, { "Content-Type": "text/plain" });
    response.end("Create task");
};
function updateListTask(request, response) {
    response.writeHead(StatusCode.NO_CONTENT, { "Content-Type": "text/plain" });
    response.end("update task");
};
function deleteListTask(request, response) {
    response.writeHead(StatusCode.NO_CONTENT, { "Content-Type": "text/plain" });
    response.end("delete task");
};

module.exports = {
    getListTask,
    createListTask,
    updateListTask,
    deleteListTask,
};