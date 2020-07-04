import _ from "underscore";

export default {
    BASE_API: _.isEmpty(process.env.REACT_APP_BASE_API) ? "http://127.0.0.1:5000" : process.env.REACT_APP_BASE_API,
}