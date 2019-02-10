import axios from 'axios';

const KEY = 'AIzaSyC3HeYutISfO_iMwFtF97Xvby_0dCVmr_c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});