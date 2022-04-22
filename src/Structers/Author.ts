import { AuthorArg } from "../types/types";

/**
 * Author Class
 * @public
 */
export default class Author {

    readonly name: string = "";
    readonly email: string = "";
    readonly url: string = "";

    constructor(arg: AuthorArg | string)
    {
        if(typeof arg == 'string')
            if(arg.includes("@"))
                this.email = arg;
            else if(arg.includes("http") || arg.includes("https"))
                this.url = arg;
            else
                this.name = arg;
        else
        {
            const { name, url, email } = arg;
            this.name = name as string;
            this.url = url as string;
            this.email = email as string;
        }
    }

}