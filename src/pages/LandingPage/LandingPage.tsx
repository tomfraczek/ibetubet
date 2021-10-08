import { isEmpty } from 'lodash';
import React, { FC, useEffect, useState } from 'react';

import Races from '../../components/Races';
import { getRaces } from '../../services';
import { useStyles } from './styles';

const LandingPage: FC = () => {
    const classes = useStyles();
    const [races, setRaces] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRaces().then(
            response => {
                console.log(response);
                setRaces(response);
            },
            error => {
                setError(error);
            },
        );
    }, []);

    return <>{!isEmpty(races) && <Races races={races} />}</>;
};

export default LandingPage;
