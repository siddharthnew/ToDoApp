"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyparser = __importStar(require("body-parser"));
var db_1 = require("./startup/db");
var route_1 = require("./startup/route");
var ToDoApp = /** @class */ (function () {
    function ToDoApp() {
        //code to eshtablish a local server
        this.app = express_1.default();
        this.app.listen(3000, 'localhost', function () { console.log("server  is ruuning on Port 3000"); });
        route_1.Router.ConfigRoutes(this.app);
        this.configBodyParser();
        db_1.DB.connectMonoDb();
    }
    ToDoApp.prototype.configBodyParser = function () {
        //code to view the Body
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    };
    return ToDoApp;
}());
exports.todoApp = new ToDoApp();
