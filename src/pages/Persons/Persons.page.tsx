import { useEffect } from "react";
import { useLoaderService } from "../../services/loader.service";
import { usePersonService } from "../../services/person.service";

const PersonsPage: React.FC = props => {

    const personService = usePersonService();
    const loader = useLoaderService();

    useEffect(() => {
        loader?.show('carregando');
        personService?.getAll().then(res => {
            loader?.dismiss();
            console.log(res);
        }).catch(error => {
            loader?.dismiss();
            throw error;
        });
    }, []);
    
    return (
        <h1>Persons</h1>
    );
}

export default PersonsPage;