import { Box, CircularProgress, Typography } from "@mui/material";
import styles from './Loader.module.scss';

interface LoaderComponentProps {
    message?: string;
}

const LoaderComponent: React.FC<LoaderComponentProps> = props => {

    return (
        <Box className={styles.container}>
            <div className={styles.box}>
                <CircularProgress />
                <Typography>{props.message}</Typography>
            </div>
        </Box>
    );
}

export default LoaderComponent;