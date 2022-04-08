import { createContext, useContext } from "react";

export function createService<T>(value: T) {

    const context = createContext<T>(value);

    const provider: React.FC = props => {
    
        return (
            <context.Provider value={value}>
                {props.children}
            </context.Provider>
        );
    };

    const useService = () => useContext(context);

    return {
        provider,
        useService
    }
}