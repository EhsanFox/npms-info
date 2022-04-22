import getPackage from "..";
import RequestHandler from "../RequestHandler";
import { MaintainerArg } from "../types/types";
import Package from "./Package";

/**
 * Maintainer Class
 * @public
 */
export default class Maintainer {

    readonly name: string;
    readonly email: string;

    constructor(arg: MaintainerArg)
    {
        this.name = arg.name;
        this.email = arg.email;
    }

    public async fetchPackages(total: number = 250): Promise<Package[]>
    {
        const d: any = await (await new RequestHandler('https://registry.npmjs.org').send(`/-/v1/search?text=maintainer:${this.name}&size=${total}`)).data;
        const data: any[] = d.objects;
        const result: Package[] = [];
        for (const item of data)
        {
            result.push(await getPackage(item.package.name))
        }
        return result;
    }
}