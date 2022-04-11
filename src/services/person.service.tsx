import { createContext, useContext } from "react";
import { Person } from '../models/api/person';
import { URLS } from "../common/constants/urls";
import { http } from "../common/http/http.common";

export interface PersonService {
    getAll(): Promise<Person[]>;
}

const PersonServiceContext = createContext<PersonService | undefined>(undefined);

const PersonServiceProvider: React.FC = props => {

    const getAll = () => {
        return http.get<Person[]>(URLS.api.persons.getAll()).then(res => res.data);
    }

    return (
        <PersonServiceContext.Provider value={{ getAll }}>
            {props.children}
        </PersonServiceContext.Provider>
    );
};

export default PersonServiceProvider;

export const usePersonService = () => useContext(PersonServiceContext);