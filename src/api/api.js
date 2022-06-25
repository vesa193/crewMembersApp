import axios from 'axios';

const fetchMemberCrews = async () => {
    const res = await axios.get('https://api.spacexdata.com/v4/crew');
    const memberCrewsList = res.data;
    return memberCrewsList;
};

const fetchRockets = async () => {
    const res = await axios.get('https://api.spacexdata.com/v4/rockets');
    const RocketsList = res.data;
    return RocketsList;
};

const api = {
    fetchMemberCrews,
    fetchRockets,
};

export default api;
