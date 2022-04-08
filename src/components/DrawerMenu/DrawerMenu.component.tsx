import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useRecoilState } from "recoil";
import { drawerMenuOpenedState } from "../../state/navbar-menu-opened.state";
import { Home as IconHome, People as IconPeople } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const DrawerMenuComponent: React.FC = props => {

    const [drawerMenuOpened, setDrawerMenuOpened] = useRecoilState(drawerMenuOpenedState);
    const navigate = useNavigate();

    const menuItems = [
        {
            label: 'Home',
            path: '/',
            icon: <IconHome />
        },
        {
            label: 'Persons',
            path: '/persons',
            icon: <IconPeople />
        }
    ];

    return (
        <Drawer
            anchor="left"
            onBackdropClick={() => setDrawerMenuOpened(false)}
            open={drawerMenuOpened}
        >
            <Box onClick={() => setDrawerMenuOpened(false)}>
                <List>
                    {menuItems.map((mi, i) => (
                        <ListItem button key={i} onClick={() => navigate(mi.path)}>
                            <ListItemIcon>{mi.icon}</ListItemIcon>
                            <ListItemText primary={mi.label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DrawerMenuComponent;