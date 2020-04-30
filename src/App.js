import React from "react";
import useCounter from "./useCounter";
import CounterProvider from "./CounterProvider";
import CountActionsProvider from "./CountActionsProvider";
import Counter from "./Counter";

function App() {
    const { count, increase, decrease } = useCounter({ initialCount: 5 });
    return (
        <>
            <CounterProvider count={count}>
                <CountActionsProvider increase={increase} decrease={decrease}>
                    <Counter />
                </CountActionsProvider>
            </CounterProvider>
        </>
    );
}

export default App;
