import api from './index';

const path = {
    getClass: '/overview/getClass',
    getArtList: '/overview/getArtList',
};

const getClass = () => api.get(path.getClass);

const getArtList = () => api.get(path.getArtList);

export default {
    getClass,
    getArtList,
};
