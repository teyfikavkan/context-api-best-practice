import React from "react";
import { useCountActionsContext } from "./CountActionsProvider";

function CountIncreaser() {
    const { increase } = useCountActionsContext();
    console.log("CountIncreaser");
    return <button onClick={increase}>+ Increate</button>;
}

export default CountIncreaser;
