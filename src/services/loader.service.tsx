import { createContext, useContext, useState } from "react";
import { LoaderComponent } from "../components/Loader/Loader.component";

export interface LoaderService {
    show: (message?: string) => void,
    dismiss: () => void
}

const LoaderServiceContext = createContext<LoaderService | undefined>(undefined);

const LoaderServiceProvider: React.FC = props => {

    const [showing, setShowing] = useState(true);
    const [message, setMessage] = useState<string>();

    const show = (message: string = 'Loading...') => {
        setShowing(true);
        setMessage(message);
    }

    const dismiss = () => {
        setShowing(false);
        setMessage(undefined);
    }

    return (
        <LoaderServiceContext.Provider value={{ show, dismiss }}>
            {showing && <LoaderComponent message={message} />}
            {props.children}
        </LoaderServiceContext.Provider>
    );
};

export default LoaderServiceProvider;

export const useLoaderService = () => useContext(LoaderServiceContext);