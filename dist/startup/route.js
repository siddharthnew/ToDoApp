"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.ConfigRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({
                "success": "server is running"
            });
        });
    };
    return Router;
}());
exports.Router = Router;
