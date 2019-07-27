"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.connectMonoDb = function () {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true }).then(function () {
            console.log("DB Connection Success");
        })
            .catch(function (err) {
            console.log("DB Connection Failed");
            console.log(console.error());
        });
    };
    DB.connectionString = "mongodb://localhost:27017/TodoDb"; //TodoDb- database name
    return DB;
}());
exports.DB = DB;
