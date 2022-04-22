import { BugsArg } from "../types/types";

/**
 * Bugs Class
 * @public
 */
export default class Bugs {

    readonly url: string;
    constructor(arg: BugsArg | string)
    {
        if(typeof arg == "string")
            this.url = arg;
        else
            this.url = arg.url as string
    }
}