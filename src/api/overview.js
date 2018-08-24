import api from './index';

const path = {
    getClass: '/overview/getClass',
    getArtList: '/overview/getArtList',
    createArticle: '/overview/createArticle',
};

const getClass = () => api.get(path.getClass);

const getArtList = () => api.get(path.getArtList);

const createArticle = (form) => api.post(path.createArticle, form, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = '';
        for(let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        const newRet = ret.slice(0, ret.length - 1);
        return newRet;
    }]
});

export default {
    getClass,
    getArtList,
    createArticle,
};
