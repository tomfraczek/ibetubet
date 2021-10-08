import api from './axiosApi';

export const getRaces = async () => {
    const { data } = await api.get('races');
    return data;
};

export const getRace = async (raceId: string) => {
    const { data } = await api.get(`races/${raceId}`);
    return data;
};

export const getParticipants = async () => {
    const { data } = await api.get('participants');
    return data;
};

export const getParticipant = async (participantId: number) => {
    const { data } = await api.get(`participants/${participantId}`);
    return data;
};
