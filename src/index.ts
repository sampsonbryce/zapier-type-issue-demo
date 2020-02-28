import { version } from "../package.json";
import { version as platformVersion } from "zapier-platform-core";

// We can roll up all our behaviors in an App.
export const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version,
  platformVersion,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [] as any[],

  afterResponse: [] as any[],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {},

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {}
};

// Finally, export the app.
