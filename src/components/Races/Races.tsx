import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useStyles } from './styles';

interface Props {
    races: any;
}

interface Race {
    name: string;
    id: number;
}

const Races: FC<Props> = ({ races }) => {
    const history = useHistory();

    return (
        <ul>
            {races.map((race: Race) => (
                <li onClick={() => history.push(`race/${race.id}`)} key={race.id}>
                    {race.name}
                </li>
            ))}
        </ul>
    );
};

export default Races;
