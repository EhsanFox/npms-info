/**
 * @public
 */
export interface AuthorArg {
    name?: string;
    email?: string;
    url?: string;
}

/**
 * @public
 */
export interface BugsArg {
    url?: string;
}

/**
 * @public
 */
export interface MaintainerArg {
    name: string;
    email: string;
}

import Author from "../Structers/Author";
import Bugs from "../Structers/Bugs";
import Maintainer from "../Structers/Maintainer";
import Readme from "../Structers/Readme";
import Repository from "../Structers/Repository";

/**
 * @public
 */
export type PackageType = "module" | "commonjs";

/**
 * @public
 */
export interface PackageInterface {

    name: string;
    description: string;
    version: string;
    maintainers: Maintainer[];
    files: number;

    main?: string;
    type?: PackageType;
    homepage?: string;
    repository?: Repository;
    scripts?: unknown;
    bugs?: Bugs;
    author?: Author;
    dependencies?: unknown;
    keywords?: string[] | [];
    license?: string;
    readme?: Readme;
}

/**
 * @public
 */
export interface repoArg {
    type: string;
    url: string;
}