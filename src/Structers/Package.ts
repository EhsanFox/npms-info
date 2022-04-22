import { MaintainerArg } from "../types/types";
import { PackageInterface, PackageType } from "../types/types";
import Author from "./Author";
import Bugs from "./Bugs";
import Maintainer from "./Maintainer";
import Repository from "./Repository";

/**
 * Package Wrapper
 * @public
 */
export default class Package implements PackageInterface {

    readonly name: string;
    readonly version: string;
    readonly description: string;
    readonly maintainers: Maintainer[];
    readonly files: number;

    readonly type?: PackageType;
    readonly main?: string;
    readonly homepage?: string;
    readonly repository?: Repository;
    readonly bugs?: Bugs;
    readonly scripts?: unknown;
    readonly keywords?: string[] | [];
    readonly author?: Author;
    readonly license?: string;
    readonly dependencies?: unknown;

    constructor(arg: any)
    {
        this.name = arg.name;
        this.version = arg.version;
        this.description = arg.description;
        this.maintainers = arg.maintainers.map((x: MaintainerArg) => new Maintainer(x));
        this.files = arg.dist.fileCount;
        
        if('type' in arg)
            this.type = arg.type;

        if('main' in arg)
            this.main = arg.main;

        if('homepage' in arg)
            this.homepage = arg.homepage;

        if('repository' in arg)
            this.repository = new Repository(arg.repository);

        if('bugs' in arg)
            this.bugs = new Bugs(arg.bugs)

        if('scripts' in arg)
            this.scripts = arg.scripts;

        if('keywords' in arg)
            this.keywords = arg.keywords;

        if('author' in arg)
            this.author = new Author(arg.author);

        if('license' in arg)
            this.license = arg.license;

        if('dependencies' in arg)
            this.dependencies = arg.dependencies;
    }
}