import React, { createContext, useContext, useState } from "react";
import ModalComponent from "../components/Modal/Modal.component";
import { v4 as uuidV4 } from 'uuid';

export interface ModalService {
    open: (component: JSX.Element, options?: { data?: any }) => void
}

export interface ModalItem {
    id: string;
    component: JSX.Element;
}

const ModalServiceContext = createContext<ModalService | undefined>(undefined);

const ModalServiceProvider: React.FC = props => {

    const [modals, setModals] = useState<ModalItem[]>([]);

    const open = (component: JSX.Element) => {
        setModals(ms => [
            ...ms,
            {
                id: uuidV4(),
                component
            }
        ]);
    }

    return (
        <ModalServiceContext.Provider value={{ open }}>
            {modals.map(m => (
                <ModalComponent
                    key={m.id}
                    component={m.component}
                    onClose={() => setModals(ms => ms.filter(msi => msi.id != m.id))}
                />
            ))}
            {props.children}
        </ModalServiceContext.Provider>
    );
};

export default ModalServiceProvider;

export const useModalService = () => useContext(ModalServiceContext);