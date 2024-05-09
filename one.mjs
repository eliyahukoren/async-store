import { myLocalStore } from './store.mjs';

export function runOne(val) {
  myLocalStore.telemetry.set('runOne', val);
}
