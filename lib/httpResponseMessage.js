"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseMessage = void 0;
var HttpResponseMessage = /** @class */ (function () {
    function HttpResponseMessage(statusCode) {
        if (statusCode === void 0) { statusCode = 200; }
        this._headers = {};
        this.statusCode = statusCode;
    }
    Object.defineProperty(HttpResponseMessage.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        set: function (headers) {
            this._headers = headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpResponseMessage.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpResponseMessage.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        set: function (code) {
            if (code < 0 || code > 999) {
                throw new Error(code + " is not a valid status code");
            }
            this._statusCode = code;
        },
        enumerable: false,
        configurable: true
    });
    return HttpResponseMessage;
}());
exports.HttpResponseMessage = HttpResponseMessage;
