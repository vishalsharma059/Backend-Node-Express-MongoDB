import { log } from "console";
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("emit", (name) => {
    console.log(`Hello ${name}`);
    
})

emitter.emit("emit", "Vishal");