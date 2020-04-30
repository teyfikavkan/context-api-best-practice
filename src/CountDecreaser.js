import React from "react";
import { useCounterContext } from "./CounterProvider";

function CountDecreaser() {
    const { decrease } = useCounterContext();
    console.log("CountDecreaser");
    return <button onClick={decrease}>- Decrease</button>;
}

export default CountDecreaser;
