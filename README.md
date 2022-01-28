## Node HTTP echo

Review your requests and responses with `echo.js`:
```bash
node echo.js
```

As result:
```bash
# node echo.js                                                                                                         66 ms  master
Server is running on http://localhost:8083
```
### Example

You can try to create request with `curl:
```bash
curl -X POST http://localhost:8083 -H "Content-Type: application/json" -d '{"message": "Hello from ", "from": "Sys-Adm.in!"}'
```

As result:
```bash
==== POST /

> Headers
{
  host: 'localhost:8083',
  'user-agent': 'curl/7.77.0',
  accept: '*/*',
  'content-type': 'application/json',
  'content-length': '49'
}

> Uri
/ HTTP 200 (application/json)

> Body
{"message": "Hello from ", "from": "Sys-Adm.in!"}
```

Or just open link `http://localhost:8083` in browser.