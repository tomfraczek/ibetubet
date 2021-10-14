import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    tableCell: {
        textAlign: 'right!important' as any,

        '&:first-child': {
            textAlign: 'left!important' as any,
        },
    },
}));
