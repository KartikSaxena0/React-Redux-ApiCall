import axios from "axios";
import URLs from "./urls";
import konsole from "./konsole"


const invoke = (url, method, body, cancel) => {

    if (cancel) {
        cancel();
    }

    try {

        // This is how we set the autho in headers...
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return axios({
            cancelToken: new axios.CancelToken((cancelProgress) => {
                cancel = cancelProgress;
            }),

            method: method,
            url: url,
            params: (method === "GET") ? body : null,
            data: method === "POST" || method === "PUT" || method === "DELETE" ? body : null,

        });

    } catch (error) {
        if (axios.isCancel(error)) {
            konsole.error('Request canceled', error.message);
        } else {
            konsole.error('Something went wrong: ', error.message)
        }

    }
}

const Services = {

    getFakeUserData: async () => {

        let cancel;
        let url = URLs.getFakeUserDataApi;
        let body = {};
        return invoke(url, "GET", body, cancel);
    }
}

export default Services;