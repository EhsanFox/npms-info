import axios from "axios";

/**
 * Request handler for sending api requests
 * @class
 */
export class RequestHandler {
    /**
     * Base URL that would add up with URI
     * @private
     * @type {String}
     */
    #BaseURL;

    /**
     * @param {String} ServerURL Server URL that would be added with URI in requests
     */
    constructor(ServerURL)
    {
        this.BaseURL = ServerURL;

        /**
         * @description Send a Request
         * @param {String} uri Endpoint to add with ServerURL
         * @param {String} method Method to send such as GET/POST/....
         * @param {Object} body an Object to send to the URL Endpoint
         * @returns {Promise<any>}
         */
        this.send = (uri, method = 'get', body = {}) =>
        {
            return axios[method]
                (
                    uri,
                    {
                        baseURL: this.BaseURL,
                        data: body
                    }
                );
        }
    }
}