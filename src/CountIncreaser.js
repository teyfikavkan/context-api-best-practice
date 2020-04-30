import React from "react";
import { useCounterContext } from "./CounterProvider";

function CountIncreaser() {
    const { increase } = useCounterContext();
    console.log("CountIncreaser");
    return <button onClick={increase}>+ Increate</button>;
}

export default CountIncreaser;
