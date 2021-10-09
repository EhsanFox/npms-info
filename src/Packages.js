import { RequestHandler } from "./RequestHandler"

/**
 * @description Get Packages that user is maintained on
 * @param {String} user Username to search on NPM
 * @param {Number} total Total packages to get from API
 * @returns {Promise<Object>}
 */
const Packages = (user, total = 250) => {
    return new Promise((resolve, reject) => {

        new RequestHandler('https://registry.npmjs.org').send(`/-/v1/search?text=maintainer:${user}&size=${total}`)
        .then(result => {
            resolve(
                result.objects.map(e => {
                    delete e['searchScore'];
                    delete e.package['scope'];
                    e.package.maintainers.map(x => {
                        if(x === user)
                            delete e.package.maintainers[x];
                    });
                })
            )
        })
        .catch(reject);

    });
}

export { Packages }