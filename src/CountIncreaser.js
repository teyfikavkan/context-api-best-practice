import React from "react";

const CountIncreaser = React.memo(({ increase }) => {
    console.log("CountIncreaser");
    return <button onClick={increase}>+ Increate</button>;
});

export default CountIncreaser;
