import { createContext, useContext } from "react";
import { SnackbarProvider, useSnackbar, VariantType } from "notistack";

const SNACKBAR_DURATION = 5000;

export interface ToastService {
    open: (message: string, variant?: VariantType) => void;
}

const ToastServiceContext = createContext<ToastService | undefined>(undefined);

const ToastServiceProvider: React.FC = props => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const open = (message: string, variant?: VariantType) => {

        enqueueSnackbar(message, {
            variant,
            autoHideDuration: SNACKBAR_DURATION
        });
    }

    return (
        <ToastServiceContext.Provider value={{ open }}>
            {props.children}
        </ToastServiceContext.Provider>
    );
};

export default ToastServiceProvider;

export const useToastService = () => useContext(ToastServiceContext);