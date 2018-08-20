/**
 * config
 * create by lqy 2018/3/26
 */

let host = 'http://localhost:3333/';
let apiHost = `${window.location.protocol}//${window.location.host}/api/`;

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('开发1');
} else {
  console.log('生产1');
  apiHost = host;
}


const getSession = () => {
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'));
  let session_id;
  userinfo ? session_id = userinfo.session_id : session_id = null;
  return session_id;
};

export default {
  apiHost,
  host,
  getSession,
};
