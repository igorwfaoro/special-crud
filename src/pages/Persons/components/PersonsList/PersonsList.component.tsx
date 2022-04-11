import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import { DatetimeHelper } from "../../../../common/helpers/datetime.helper";
import { Person } from "../../../../models/api/person";
import { Edit as IconEdit } from '@mui/icons-material';

interface PersonsListComponentProps {
    persons: Person[];
    handleOpenForm: (person?: Person) => void
}

const PersonsListComponent: React.FC<PersonsListComponentProps> = props => {

    return (
        <TableContainer>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Birth date</TableCell>
                        <TableCell>Created at</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.persons.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.id}</TableCell>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.email}</TableCell>
                            <TableCell>{DatetimeHelper.calendar(p.birthDate)}</TableCell>
                            <TableCell>{DatetimeHelper.fromNow(p.createdAt)}</TableCell>
                            <TableCell>
                                <IconButton color="primary" onClick={() => props.handleOpenForm(p)}>
                                    <IconEdit />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PersonsListComponent;