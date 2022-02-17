import { Axios } from "@/plugins";

export const client = Axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json, text/plain, */*",
  },
});

export default class Request {
  static head(path) {
    return client.head(path);
  }

  static get(path, params = {}, headers = {}) {
    return client.get(path, {
      requestId: Math.random().toString(32),
      params,
      headers,
    });
  }

  static post(path, data = {}, headers = {}, onUploadProgress, cancelToken) {
    return client.post(path, data, {
      requestId: Math.random().toString(32),
      headers,
      onUploadProgress,
      cancelToken,
    });
  }

  static put(path, data = {}, headers = {}) {
    return client.put(path, data, {
      requestId: Math.random().toString(32),
      headers,
    });
  }

  static delete(path, data = {}, headers = {}) {
    return client.delete(path, {
      requestId: Math.random().toString(32),
      data,
      headers,
    });
  }

  static setHeader(key, value) {
    client.defaults.headers.common[key] = value;
  }
}
