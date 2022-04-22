import axios, { AxiosResponse } from "axios";

/**
 * RequestHandler Class
 * @public
 */
export default class RequestHandler {

    private BaseURL: string;

    constructor(ServerURL: string)
    {
        this.BaseURL = ServerURL;
    }

    send(uri: string, method: "get" | "post" | "patch" = "get", body: any = {}): Promise<AxiosResponse>
    {
        return axios[method]
            (
                uri,
                {
                    baseURL: this.BaseURL,
                    data: body
                }
            )
    }
}