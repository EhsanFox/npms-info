/**
 * Readme Class
 * @public
 */
export default class Readme {

    readonly file: string;
    readonly content: string;
    constructor(fileName: string, content: string)
    {
        this.file = fileName;
        this.content = content;
    }
}