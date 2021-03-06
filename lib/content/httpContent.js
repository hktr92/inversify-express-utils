"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpContent = void 0;
var HttpContent = /** @class */ (function () {
    function HttpContent() {
        this._headers = {};
    }
    Object.defineProperty(HttpContent.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    return HttpContent;
}());
exports.HttpContent = HttpContent;
