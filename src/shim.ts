import 'react-native-url-polyfill/auto';
import 'node-libs-react-native/globals';
import 'react-native-console-time-polyfill';
import 'react-native-get-random-values';
import 'text-encoding-polyfill';

// Attach the polyfill as a Global function
import structuredClone from "@ungap/structured-clone";
if (!("structuredClone" in globalThis)) {
  globalThis.structuredClone = structuredClone;
}
// @ts-ignore
global.Worker = {
  'structuredClone': structuredClone
};
