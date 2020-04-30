import React from "react";
import { useDecrease } from "./CounterProvider";

function CountDecreaser() {
    const decrease = useDecrease();
    console.log("CountDecreaser");
    return <button onClick={decrease}>- Decrease</button>;
}

export default CountDecreaser;
