# Supertest

POC using [Joi] to test contracts. Using Open api [Pokeapi].

[![NPM Version][npm-image]][npm-url]
## Requirements

- [Node]
- [Supertest]
- [Mocha]
- [Chai]
- [Joi]


# Description

JOI is a library made by the Hapi team that is a Framework for developing applications and services. JOI allows you to create plans or schemas for JavaScript objects and perform validation on them with JOI-Assert.

| validations                                       | example                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------ |
| Joi.string().required()                           | String and Required                                                            |
| Joi.number().integer().positive()                 | Inteiro, Positivo                                                              |
| Joi.string().valid(‘English’)                     | String, where we will only accept the value 'English'                          |
| oi.string().valid([‘movie’, ‘series’, ‘cartoon’]) | String, where we will only accept the value informed in the list               |
| Joi.any().allow('Test-1', 'Test-2')               | Please be informed that we will only accept Test-1 and Test-2                  |
| Joi.string().optional().allow(”, null)            | Please be informed that the property is optional and empty and null is allowed |
| Joi.boolean().required()                          | Boolean option, in which we will only accept true or false values              |
| Joi.date().min('1-1-1974')                        | We inform a minimum date for that amount                                       |
| Joi.string().required()                           | String and Required                                                            |

For more validations access [joi-git]

## Installation

clone the project and run the command below.

```sh
npm install
```

### .env

Create a file at the root of the project with the name `.env`

| .env var | value                     |
| -------- | ------------------------- |
| HOST     | https://pokeapi.co/api/v2 |

## Running

| commands   | tests that are going to run |
| ---------- | --------------------------- |
| `npm test` | runs the only test          |

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[node]: https://nodejs.org/en/download
[pokeapi]: https://pokeapi.co/
[chai]: https://www.chaijs.com/
[mocha]: https://mochajs.org/
[supertest]: https://www.npmjs.com/package/supertest
[joi]: https://www.npmjs.com/package/joi-assert
[joi-git]: https://github.com/sideway/joi/blob/master/API.md
