"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRawMetadata = exports.getRouteInfo = void 0;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
function getRouteInfo(container) {
    var raw = getRawMetadata(container);
    return raw.map(function (r) {
        var controllerId = r.controllerMetadata.target.name;
        var endpoints = r.methodMetadata.map(function (m) {
            var method = m.method.toUpperCase();
            var controllerPath = r.controllerMetadata.path;
            var actionPath = m.path;
            var paramMetadata = r.parameterMetadata;
            var args = undefined;
            if (paramMetadata !== undefined) {
                var paramMetadataForKey = paramMetadata[m.key] || undefined;
                if (paramMetadataForKey) {
                    args = (r.parameterMetadata[m.key] || []).map(function (a) {
                        var type = "";
                        switch (a.type) {
                            case constants_1.PARAMETER_TYPE.RESPONSE:
                                type = "@response";
                                break;
                            case constants_1.PARAMETER_TYPE.REQUEST:
                                type = "@request";
                                break;
                            case constants_1.PARAMETER_TYPE.NEXT:
                                type = "@next";
                                break;
                            case constants_1.PARAMETER_TYPE.PARAMS:
                                type = "@requestParam";
                                break;
                            case constants_1.PARAMETER_TYPE.QUERY:
                                type = "queryParam";
                                break;
                            case constants_1.PARAMETER_TYPE.BODY:
                                type = "@requestBody";
                                break;
                            case constants_1.PARAMETER_TYPE.HEADERS:
                                type = "@requestHeaders";
                                break;
                            case constants_1.PARAMETER_TYPE.COOKIES:
                                type = "@cookies";
                                break;
                            case constants_1.PARAMETER_TYPE.PRINCIPAL:
                                type = "@principal";
                                break;
                        }
                        return type + " " + a.parameterName;
                    });
                }
            }
            var details = {
                route: method + " " + controllerPath + actionPath
            };
            if (args) {
                details["args"] = args;
            }
            return details;
        });
        return {
            controller: controllerId,
            endpoints: endpoints
        };
    });
}
exports.getRouteInfo = getRouteInfo;
function getRawMetadata(container) {
    var controllers = utils_1.getControllersFromContainer(container, true);
    return controllers.map(function (controller) {
        var constructor = controller.constructor;
        var controllerMetadata = utils_1.getControllerMetadata(constructor);
        var methodMetadata = utils_1.getControllerMethodMetadata(constructor);
        var parameterMetadata = utils_1.getControllerParameterMetadata(constructor);
        return {
            controllerMetadata: controllerMetadata,
            methodMetadata: methodMetadata,
            parameterMetadata: parameterMetadata
        };
    });
}
exports.getRawMetadata = getRawMetadata;
