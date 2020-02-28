/* globals describe, it */

import "should";
import * as zapier from "zapier-platform-core";
import { App } from "../index";

const appTester = zapier.createAppTester(App);

/**
 * PERFORM 1
 *
 * In order for types to work with `appTester` I have to wrap the response in a promise.
 * This is not desirable as it diverges from the documentation and adds code specifically to make
 * types work just for the zapier app tester
 */
const perform = (
  z: zapier.ZObject,
  bundle: zapier.Bundle
): Promise<Array<{ message: string }>> => {
  return Promise.resolve([bundle.cleanedRequest]);
};

/**
 * PERFORM 2
 *
 * This is the desired perform function as it resembles the zapier documentation
 * @see https://platform.zapier.com/cli_tutorials/resthooks#step-3-write-the-perform-function
 */
// const perform = (
//   z: zapier.ZObject,
//   bundle: zapier.Bundle
// ): Array<{ message: string }> => {
//   return [bundle.cleanedRequest];
// };

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

    // TEST 1: Works with PERFORM 1 but not PERFORM 2
    appTester(perform, bundle);

    // TEST 2: Works with PERFORM 1 but not PERFORM 2
    // Equivalent to TEST 1 but types are explicitely defined
    appTester<Array<{ message: string }>, any>(perform, bundle);

    // TEST 3: Works with neither PERFORM 1 or PERFORM 2
    // This is the suggested fix in https://github.com/zapier/zapier-platform/issues/8#issuecomment-592269986
    appTester<Promise<Array<{ message: string }>>, any>(perform, bundle);

    done();
  });
});
