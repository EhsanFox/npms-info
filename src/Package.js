import { RequestHandler } from "./RequestHandler"

/**
 * @description Get Package information
 * @param {String} name Package name
 * @returns {Promise<Object>}
 */
const Package = (name, version = 'latest') => {
    return new Promise((resolve, reject) => {

        const data = new RequestHandler('https://registry.npmjs.org').send(`/${name}`);
        data.then(result => {

            if('error' in result)
                reject(result['error']);

            if(version === 'latest')
                version = result['dist-tags'].latest;

            if(!version in result.versions)
                reject(`${version} is not valid in ${name} package.`);

            let output;

            output.name = result.name;
            output.description = result.description;
            output.author = result.author;
            output.keywords = result.keywords;
            output.license = result.license;
            output.maintainers = result.maintainers;
            output.latest = result['dist-tags'].latest;
            output.repository = (typeof result.repository === 'string') ? result.repository : result.repository.url.split("+")[1];
            output.issues = result.bugs.url;
            output.readme = {
                file: result.readmeFilename,
                text: text.readme
            };

            output._versionList = result.versions;
            output._time = result.time;

            output.data = result.versions[version];

            resolve(output);
        })
        .catch(reject);

    });
}

export { Package }