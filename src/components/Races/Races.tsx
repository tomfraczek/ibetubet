import React, { FC } from 'react';

import { useStyles } from './styles';

interface Props {
    races: any;
}

interface Race {
    name: string;
    id: number;
}

const Races: FC<Props> = ({ races }) => (
    <ul>
        {races.map((race: Race) => (
            <li key={race.id}>{race.name}</li>
        ))}
    </ul>
);

export default Races;
