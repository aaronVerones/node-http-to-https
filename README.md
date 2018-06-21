# node-http-to-https
middleware to redirect http to https

### Quickstart
Install: 
```
npm i http-to-https
```
Include in project: 
```
const https = require('http-to-https');
```
add middleware:
```
const app = express();
app.use(https(ignoreHosts, ignorePaths, redirectCode));
```
example: ignore all ports on localhost and routes under /insecure. Send `301: Moved Permanently` status code 
```
const app = express();
app.use(https([/localhost(:\d{1,5})?/], [/\/insecure/], 301));
```

### Defaults
```
ignoreHosts = []
ignorePaths = []
redirectCode = 302
```
