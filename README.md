# deno-utils-api

Generic utility API

## JWT

POST `/jwt/:alg`

### Params

| key   | type   | description                  | required |
| ----- | ------ | ---------------------------- | -------- |
| `alg` | string | Algorithm, defaults to HS256 |          |

### Request Body

| key    | type              | description                                       | required |
| ------ | ----------------- | ------------------------------------------------- | -------- |
| `data` | Object            | JWT body                                          | Y        |
| `key`  | string            | JWT key, randomly generated UUID if not passed in |          |
| `alg`  | string            | Algorithm, defaults to HS256                      |          |
| `iss`  | string            | Issuer                                            |          |
| `aud`  | string / string[] | Audience                                          |          |
| `iat`  | boolean           | True to set issued at                             |          |
| `exp`  | string            | Expiration, e.g. 1h, 2d                           |          |

Example:

```
{
  "data": {
    "foo": "bar"
  },
  "key": "jwtkey
}
```

### Response Body

| key   | type   | description                                      |
| ----- | ------ | ------------------------------------------------ |
| `jwt` | string | JWT result                                       |
| `key` | string | JWT key, exist if `key` is not passed in request |

Example:

```
{
  "jwt": "x.y.z"
}
```
