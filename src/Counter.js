import React from "react";
import Count from "./Count";
import CountIncreaser from "./CountIncreaser";
import CountDecreaser from "./CountDecreaser";
import { useCounterContext } from "./CounterProvider";

function Counter() {
    const { count, increase, decrease } = useCounterContext();
    return (
        <>
            <Count count={count} />
            <CountIncreaser increase={increase} />
            <CountDecreaser decrease={decrease} />
        </>
    );
}

export default Counter;
