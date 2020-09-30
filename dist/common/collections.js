"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Iterates over each entry in the provided dictionary. The iterator allows
 * to remove elements and will stop when the callback returns {{false}}.
 */
function forEach(from, callback) {
    for (let key in from) {
        if (hasOwnProperty.call(from, key)) {
            const result = callback({ key: key, value: from[key] }, function () {
                delete from[key];
            });
            if (result === false) {
                return;
            }
        }
    }
}
exports.forEach = forEach;
//# sourceMappingURL=collections.js.map