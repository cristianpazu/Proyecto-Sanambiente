"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleMessage(response, code, message) {
    return response.status(code).json({ message });
}
exports.default = handleMessage;
