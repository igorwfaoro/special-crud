import { createContext, useContext } from "react";
import { SnackbarProvider, useSnackbar, VariantType } from "notistack";
import { HttpResponseHelper } from "../common/helpers/http-response.helper";

const SNACKBAR_DURATION = 5000;

export interface ToastService {
    open: (message: string, variant?: VariantType) => void;
    openWithHttpError: (error: any) => void;
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

    const openWithHttpError = (error: any) => {
        open(HttpResponseHelper.mapErrorResponse(error).message, 'error');
    }

    return (
        <ToastServiceContext.Provider value={{ open, openWithHttpError }}>
            {props.children}
        </ToastServiceContext.Provider>
    );
};

export default ToastServiceProvider;

export const useToastService = () => useContext(ToastServiceContext);