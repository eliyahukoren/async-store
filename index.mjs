import { myLocalStore } from './store.mjs';
import { runOne } from "./one.mjs";
import { runTwo } from "./two.mjs";

let a = 0;
let b = 0;

const ai = setInterval(() => {
    console.log(`runOne`)
    a++;
    runOne(a);
}, 1000);

const ab = setInterval(() => {
    console.log(`runTwo`)
    b++;
    runTwo(b)
}, 1500);

const ac = setInterval(() => {
    console.log(myLocalStore.telemetry.get());
}, 2000);

setInterval(() => {
    console.log(`clear`)
    clearInterval(ai);
    clearInterval(ab);
    clearInterval(ac);
    a = 0;
    b = 0;
    myLocalStore.telemetry.clear();
    console.log(myLocalStore.telemetry.get());
}, 10000);