# npms-info
 an API Wrapper for NPMs

## Documents
Work in progress...

## Examples

-   Fetch Package Information
```js
// ESM
import npmsinfo from "npms-info"

// CommonJS
const npmsinfo = require("npms-info")

npmsinfo('PACKAGE-NAME')
.then(result => {
    console.log(result);
})
.catch(console.error)
```

-   Fetch Package with a specific version
```js
// ESM
import npmsinfo from "npms-info"

// CommonJS
const npmsinfo = require("npms-info")

npmsinfo('PACKAGE-NAME', 'PACKGE-VERSION')
.then(result => {
    console.log(result);
})
.catch(console.error)
```

-   Get other packages of the maintainer
```js
// ESM
import npmsinfo from "npms-info"

// CommonJS
const npmsinfo = require("npms-info")

npmsinfo('PACKAGE-NAME')
.then(result => {
    result.maintainers[0].fetchPackages()
    .then(userPackages => {
        // Enjoy the data.
    })
})
.catch(console.error)
```