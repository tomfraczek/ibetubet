// import { Place } from '@material-ui/icons';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Paper from '@mui/material/Paper';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TextField from '@mui/material/TextField';
import { Button, Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { FC, useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import { getParticipants } from '../../services';
import { useStyles } from './styles';

interface Participant {
    body: string;
    id: number;
}

const ParticipantsTable: FC = () => {
    const classes = useStyles();
    const [participants, setParticipants] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [betData, setBetData] = useState([]);

    useEffect(() => {
        getParticipants().then(
            response => {
                setParticipants(response);
                console.log(response);
                setIsLoaded(true);
            },
            error => {
                setError(error);
            },
        );
    }, []);

    const columns = ['Name', 'Winner', '2nd Place', '3rd Place'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id);
    };

    const [textValue, setTextValue] = useState<string>('');

    const onTextChange = (e: any) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue('');
    return (
        <Paper>
            <h2>Form Demo</h2>

            <TextField
                onChange={onTextChange}
                value={textValue}
                label="Text Value" // optional
            />

            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
        </Paper>
        // <>
        //     <TextField
        //         id="standard-basic"
        //         label="Bet amount"
        //         variant="standard"
        //         onChange={handleChange}
        //     />
        //     <TableContainer component={Paper}>
        //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //             <TableHead>
        //                 <TableRow>
        //                     {columns.map(column => (
        //                         <TableCell className={classes.tableCell}>{column}</TableCell>
        //                     ))}
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {participants.map((participant: Participant) => (
        //                     <TableRow
        //                         key={participant.id}
        //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                     >
        //                         <TableCell component="th" scope="row">
        //                             {participant.body}
        //                         </TableCell>
        //                         <TableCell align="right">
        //                             <FormControlLabel
        //                                 value="first_place"
        //                                 control={
        //                                     <Radio
        //                                         id={participant.id.toString()}
        //                                         onChange={handleChange}
        //                                     />
        //                                 }
        //                                 label=""
        //                             />
        //                         </TableCell>
        //                         <TableCell align="right">
        //                             <FormControlLabel
        //                                 value="second_place"
        //                                 control={
        //                                     <Radio
        //                                         id={participant.id.toString()}
        //                                         onChange={handleChange}
        //                                     />
        //                                 }
        //                                 label=""
        //                             />
        //                         </TableCell>
        //                         <TableCell align="right">
        //                             <FormControlLabel
        //                                 value="third_place"
        //                                 control={
        //                                     <Radio
        //                                         id={participant.id.toString()}
        //                                         onChange={handleChange}
        //                                     />
        //                                 }
        //                                 label=""
        //                             />
        //                         </TableCell>
        //                     </TableRow>
        //                 ))}
        //             </TableBody>
        //         </Table>
        //     </TableContainer>
        // </>
    );
};
// </>
// );
// };

export default ParticipantsTable;
