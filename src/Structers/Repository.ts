import { repoArg } from "../types/types";

/**
 * Repository Class
 * @public
 */
export default class Repository {

    readonly type: string;
    readonly url: string;

    constructor(arg: repoArg)
    {
        this.type = arg.type;
        this.url = arg.url.split("+")[1];
    }

}