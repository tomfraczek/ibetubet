import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { bindActionCreators } from 'redux';

import ParticipantsTable from '../../components/ParticipantsTable';
import { getRace } from '../../services';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';
import { useStyles } from './styles';

const RacePage: FC = () => {
    const { pathname } = useLocation();
    const [race, setRace] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const classes = useStyles();

    const state = useSelector((state: RootState) => state.bank);
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        const raceId = pathname.split('/')[2];
        getRace(raceId).then(
            response => {
                setRace(response);
                setIsLoaded(true);
                // console.log(response);
            },
            error => {
                // setError(error);
            },
        );
    }, []);

    return (
        <>
            <div>
                {isLoaded && (
                    <>
                        <div className={classes.headerContainer}>
                            <h1>{race.name}</h1>
                            <span
                                className={clsx(
                                    classes.activeStatus,
                                    race.active ? classes.active : classes.inactive,
                                )}
                            />
                        </div>
                        <ParticipantsTable />
                    </>
                )}
            </div>
        </>
    );
};

export default RacePage;
