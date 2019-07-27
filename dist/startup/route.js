"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoRoutes_1 = require("./../routes/todoRoutes");
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.ConfigRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({
                "success": "server is running"
            });
        });
        app.use('/todo', todoRoutes_1.todoRoutes);
    };
    return Router;
}());
exports.Router = Router;
