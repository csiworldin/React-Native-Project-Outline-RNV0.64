import { Config } from './appConfig';

const WEB_BASE_URL = Config.BaseURL[ Config.Env ].web;
const API_BASE_URL = Config.BaseURL[ Config.Env ].api;
const API = {
  /**
   * Set all the URLs here in the below provided format
   * key: { url: '', endPoint: '' },
   */

  //Auth APIs
  register: { url: 'register', endPoint: 'auth' },
  login: { url: 'login', endPoint: 'auth' },
  logout: { url: 'logout', endPoint: 'auth' },

};
export { WEB_BASE_URL, API_BASE_URL, API }