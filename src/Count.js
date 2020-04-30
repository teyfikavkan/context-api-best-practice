import React from "react";
import { useCounterContext } from "./CounterProvider";

function Count() {
    const { count } = useCounterContext();
    console.log("Count");
    return <div>Count is: {count}</div>;
}

export default Count;
