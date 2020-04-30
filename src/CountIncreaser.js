import React from "react";
import { useIncrease } from "./CounterProvider";

function CountIncreaser() {
    const increase = useIncrease();
    console.log("CountIncreaser");
    return <button onClick={increase}>+ Increate</button>;
}

export default CountIncreaser;
