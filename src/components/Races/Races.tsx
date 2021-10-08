import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

interface Props {
    races: any;
}

interface Race {
    name: string;
    id: number;
}

const Races: FC<Props> = ({ races }) => {
    const classes = useStyles();
    return (
        <div className={classes.racesContainer}>
            {races.map((race: Race) => (
                <Link to={`race/${race.id}`}>{race.name}</Link>
            ))}
        </div>
    );
};

export default Races;
