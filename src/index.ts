import RequestHandler from "./RequestHandler";
import Package from "./Structers/Package";
import * as Types from "./types/types";
/**
 * Main Function of Module
 * @public
 */
export default async function getPackage(name: string, version: string = 'latest'): Promise<Package>
{
    const data: any = await (await new RequestHandler('https://registry.npmjs.org').send(`/${name}`)).data;
    if(version !== 'latest')
        if(!(version in data.versions))
            throw new Error(`Invalid Version: version ${version} doesn't exist for ${name} package.`)
        else
            return new Package(data.versions[version])
    else
    {
        const latestVersion = data['dist-tags'].latest;
        return new Package(data.versions[latestVersion]);
    }

}

export { Package, RequestHandler, Types };
export { default as Author } from "./Structers/Author";
export { default as Bugs } from "./Structers/Bugs";
export { default as Maintainer } from "./Structers/Maintainer";
export { default as Readme } from "./Structers/Readme";
export { default as Repository } from "./Structers/Repository";