import { myLocalStore } from './store.mjs';

export function runTwo(val) {
  myLocalStore.telemetry.set('runTwo', val);
}
