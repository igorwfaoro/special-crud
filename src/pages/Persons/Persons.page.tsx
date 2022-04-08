import { useEffect } from "react";
import { usePersonService } from "../../services/person.service";

const PersonsPage: React.FC = props => {

    const personService = usePersonService();

    useEffect(() => {
        personService?.getAll().then(console.log);
    }, []);
    
    return (
        <h1>Persons</h1>
    );
}

export default PersonsPage;

