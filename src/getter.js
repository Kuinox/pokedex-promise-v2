const { values } = require('./default.js')
const { handleError } = require('./error.js')

let options = {
    baseURL: `${values.protocol}${values.hostName}/`,
    timeout: values.timeout
}

exports.getJSON = async function getJSON(axios, url, cb) {
    try {
        response = await axios.get(url, options)
        // if there is an error
        if (response.statusCode !== undefined && response.statusCode !== 200) {
            handleError(response, cb)
        } else {
            response = response.data
            // if a callback is present
            if (cb) {
                // call it, without errors
                cb(response, false);
            } else {
                return response;
            }
        }
    } catch (error) {
        handleError(error, cb)
    }
}
