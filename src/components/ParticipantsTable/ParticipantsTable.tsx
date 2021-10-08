import { FC, useEffect, useState } from 'react';

import { getParticipant, getParticipants } from '../../services';
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

    return (
        <ul>
            {isLoaded &&
                participants.map((participant: Participant) => (
                    <li key={participant.id}>{participant.body}</li>
                ))}
        </ul>
    );
};

export default ParticipantsTable;
