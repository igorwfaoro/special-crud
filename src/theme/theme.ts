import { createTheme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: pink[500]
        }
    }
});