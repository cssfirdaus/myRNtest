import axios, {AxiosResponse} from 'axios';

class HttpServices {
  getCall = (url: any, payload?: any) => {
    return axios
      .get(url, {
        params: payload,
      })
      .then(data => {
        return data;
      });
  };
}

export const httpService = new HttpServices();
