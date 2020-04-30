import React from "react";

const Count = React.memo(({count}) => {
    console.log("Count");
    return <div>Count is: {count}</div>;
});

export default Count;
