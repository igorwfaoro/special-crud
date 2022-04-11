import { Modal } from "@mui/material";
import { useState } from "react";
import styles from './Modal.module.scss';

export interface ModalComponentProps {
    component: JSX.Element;
    onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    options?: {
        closeOnBackdropClick?: boolean;
    }
}

const ModalComponent: React.FC<ModalComponentProps> = props => {

    const [opened, setOpened] = useState(true);

    return (
        <Modal
            open={opened}
            onBackdropClick={() => props.options?.closeOnBackdropClick && setOpened(false)}
            onClose={props.onClose}
            className={styles.wrapper}
        >
            <div className={styles.content}>
                {props.component}
            </div>
        </Modal>
    );
}

export default ModalComponent;