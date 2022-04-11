
interface PersonFormComponentProps {
    personId?: number;
}

const PersonFormComponent: React.FC<PersonFormComponentProps> = props => {

    return (
        <div>
            <h1>Form</h1>
            <h2>personId: {props.personId}</h2>
        </div>
    );
}

export default PersonFormComponent;