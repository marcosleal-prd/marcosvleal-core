"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringTransform = {
    toLowercase: (str) => {
        return str.toLocaleLowerCase();
    },
    toUppercase: (str) => {
        return str.toLocaleUpperCase();
    },
    toCapitalize: (str) => {
        return str.toLocaleLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    }
};
//# sourceMappingURL=index.js.map