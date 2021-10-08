import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    activeStatus: {
        width: 10,
        height: 10,
        borderRadius: '50%',
    },
    active: {
        backgroundColor: 'green',
    },
    inactive: {
        backgroundColor: 'red',
    },
}));
