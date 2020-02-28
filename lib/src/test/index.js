"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
const zapier = require("zapier-platform-core");
const index_1 = require("../index");
const appTester = zapier.createAppTester(index_1.App);
const perform = (z, bundle) => {
    return Promise.resolve([bundle.cleanedRequest]);
};
describe("My App", () => {
    it("should test something", done => {
        const x = 1;
        x.should.eql(1);
        done();
    });
    it("should return an array", done => {
        const x = 1;
        x.should.eql(1);
        const bundle = {
            inputData: {},
            cleanedRequest: { message: "Testing Zapier Hook" }
        };
        appTester(perform, bundle);
        appTester(perform, bundle);
        appTester(perform, bundle);
        done();
    });
});
//# sourceMappingURL=index.js.map