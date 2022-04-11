import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { Person } from "../../models/api/person";
import { useLoaderService } from "../../services/loader.service";
import { usePersonService } from "../../services/person.service";
import { useToastService } from "../../services/toast.service";
import { Add as IconAdd } from '@mui/icons-material';
import PersonsListComponent from "./components/PersonsList/PersonsList.component";
import styles from './Persons.module.scss';
import { useModalService } from "../../services/modal.service";
import PersonFormComponent from "./components/PersonForm/PersonForm.component";

const PersonsPage: React.FC = props => {

    const personService = usePersonService();
    const loader = useLoaderService();
    const toast = useToastService();
    const modal = useModalService();

    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        loader?.show();
        personService?.getAll().then(res => {
            loader?.dismiss();
            setPersons(res);
        }).catch(error => {
            loader?.dismiss();
            toast?.openWithHttpError(error);
            throw error;
        });
    }, []);

    const openFormModal = (personId?: number) => {
        modal?.open(<PersonFormComponent personId={personId} />);
    }

    return (
        <>
            <h1>Persons</h1>

            <PersonsListComponent
                persons={persons}
                handleOpenForm={person => openFormModal(person?.id)}
            />

            <Fab
                color="primary"
                className={styles.addFab}
                onClick={() => openFormModal()}
            >
                <IconAdd />
            </Fab>
        </>
    );
}

export default PersonsPage;