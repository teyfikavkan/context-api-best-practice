import React from "react";
import Count from "./Count";
import CountIncreaser from "./CountIncreaser";
import CountDecreaser from "./CountDecreaser";
import CounterProvider from "./CounterProvider";

function App() {
    return (
        <CounterProvider initialCount={5}>
            <Count />
            <CountIncreaser />
            <CountDecreaser />
        </CounterProvider>
    );
}

export default App;
