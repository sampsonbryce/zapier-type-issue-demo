"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../package.json");
const zapier_platform_core_1 = require("zapier-platform-core");
exports.App = {
    version: package_json_1.version,
    platformVersion: zapier_platform_core_1.version,
    beforeRequest: [],
    afterResponse: [],
    resources: {},
    triggers: {},
    searches: {},
    creates: {}
};
//# sourceMappingURL=index.js.map