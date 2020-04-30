import React from "react";

const CountDecreaser = React.memo(({ decrease }) => {
    console.log("CountDecreaser");
    return <button onClick={decrease}>- Decrease</button>;
});

export default CountDecreaser;
