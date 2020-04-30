import React from "react";
import CounterProvider from "./CounterProvider";
import Counter from "./Counter";

function App() {
    return (
        <CounterProvider initialCount={5}>
            <Counter />
        </CounterProvider>
    );
}

export default App;
