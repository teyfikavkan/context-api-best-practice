import React, { useContext } from "react";
import useCounter from "./useCounter";

const CounterContext = React.createContext();

export function useCounterContext() {
    const value = useContext(CounterContext);
    return value;
}

function CounterProvider({ initialCount, children }) {
    const value = useCounter({ initialCount });
    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    );
}

export default CounterProvider;
