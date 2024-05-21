import axios from "axios";
import { MIDDLE_CREDENTIAL, _getFormDataConvert } from "../Methods/normalMethods";

class ApiClass {
  _url = "";
  _data = {};
  _method = "";
  _badRequest = null;
  _authFail = null;
  _accessDenied = null;
  _notFound = null;
  _serverError = null;
  _success = null;
  _error = null;
  _query = null;
  _progress = null;
  _api_root = process.env.NEXT_PUBLIC_BASE_URL;
  _headers = {
    "Content-Type": "application/json",
    ...MIDDLE_CREDENTIAL
  };
  setHeaders = (header) => {
    this._headers = { ...this._headers, ...header };
    return this;
  };
  root = (root) => {
    this._api_root = root;
    return this;
  };
  get = (path) => {
    this._method = "GET";
    this._url = this._api_root + path;
    return this;
  };

  post = (path) => {
    this._method = 'POST';
    let endPoint = path ? path : "";
    this._url = this._api_root + endPoint;
    return this;
  };
  put = (path) => {
    this._method = "PUT";
    this._url = this._api_root + path;
    return this;
  };
  onUploadProgress = (callback = null) => {
    this._progress = callback;
    return this;
  };
  delete = (path) => {
    this._method = "DELETE";
    this._url = this._api_root + path;
    return this;
  };
  patch = (path) => {
    this._method = "PATCH";
    this._url = this._api_root + path;
    return this;
  };

  success = (callback = null) => {
    this._success = callback;
    return this;
  };
  error = (callback = null) => {
    this._error = callback;
    return this;
  };

  badRequest400 = (callback = null) => {
    this._badRequest = callback;
    return this;
  };

  authFail401 = (callback = null) => {
    this._authFail = callback;
    return this;
  };

  accessDenied403 = (callback = null) => {
    this._accessDenied = callback;
    return this;
  };

  notFound404 = (callback = null) => {
    this._notFound = callback;
    return this;
  };

  serverErr500 = (callback = null) => {
    this._serverError = callback;
    return this;
  };

  data = (a) => {
    if (this._query) {

      this._data["variables"] = a;
    } else {

      this._data = a;
    }
    return this;
  };
  upload = (callback = null) => {
    this._headers = {
      "Content-type": "multipart/form-data",
    };
    return this.send(callback);
  };
  send = async (callback = null) => {
    if (!this._api_root) {
      throw new Error("root path missing");
    }
    // const token = getLocalStorage(AUTH_TOKEN);
    let res = null;
    let err = null;

    const result = await axios({
      method: this._method,
      url: this._url,
      data: _getFormDataConvert(this._data),
      headers: {
        ...this._headers,

        // Authorization: `Bearer ${token}`
      },
      onUploadProgress: this._progress,
    })
      .then((r) => {
        res = r;
        if (r?.data?.status || r?.data?.status === undefined) {
          this._success?.call(this, res?.data, "check");
        } else {
          throw { response: { data: res.data, status: res?.status } };
        }
        return res.data;
      })
      .catch((e) => {
        err = e;

        if (!err?.response && err.toString().includes("Network error")) {
          // infoToast('Network Error');
          return;
        }
        const data = err?.response?.data ?? {};
        const { message: msg = "" } = data;
        const { status } = e?.response ?? {};
        let errorExec = true;
        switch (status) {
          case 400: //input fails
            this._badRequest?.call(this, data);
            if (!this._badRequest) {
            }
            break;
          case 401: //session fail or expiry
            this._authFail?.call(this, data);
            console.log("Authentication failed");
            if (!this._authFail) {
              // sessionDestroy()
              errorExec = false;
            }
            break;
          case 403: //session ok but access prevent
            this._accessDenied?.call(this, data);
            if (!this._accessDenied) {
              console.log("Permission Denied");
            }
            errorExec = false;
            break;
          case 404: //not found path
            this._notFound?.call(this, data);
            this._error?.call(this, "Request Not Found");
            // if (!this._notFound) {
            //     return 'Request Not Found';
            // }
            errorExec = false;
            break;
          case 500: //internal server error
            this._serverError?.call(this, data);
            if (!this._serverError) {
              console.log({ msg: "Internal Server Error" });
              this._error?.call(this, err?.response?.data ?? {});
            }
            errorExec = false;
            break;
          default:
            break;
        }

        if (this._error && errorExec) {
          this._error?.call(this, err?.response?.data ?? {});
        }
      });
    if (callback && (res || err?.response)) {
      callback?.call(this, err?.response?.status);
    }
    return result;
  };
}
const api = () => new ApiClass();

export const getJson = async (url) => {
  const res = await fetch(url);
  return res.json();
};
export default api;
