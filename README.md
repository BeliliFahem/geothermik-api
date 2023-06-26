## Description

This REST API is a Kata Code (~exercise) where I put a maximum of craft. For full description of the Kata, please see the document **kata-geothermik.pdf**.

In this project are illustrated:
- Compliance with the DDD,
- DTO pattern,
- Use of OpenAPI (Swagger),
- Development of unit tests for service layer (Jest),
- Development of E2E integration tests (Jest and supertest),
- GitFlow with conventional commits 
- As well as other development best practices.

Note: The development of the 'SupportService' service is done by following the TDD.

The API is implemented with ❤️ using [Nest](https://github.com/nestjs/nest) framework.

## Quick start
This is a quick start to run the app on your local machine.

```bash
$ npm install
$ npm run start
The API is reay on http://localhost:3000/api-doc !
```
You can now, start the front-end that consume this API. See 
- Gilab: https://gitlab.com/geothermik/geothermik-angular
- GitHub: https://github.com/BeliliFahem/geothermik-angular

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Running the app with more options

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## TODO
- [ ] Enhance rules of eslint et prettier (do something similar to the front-end angular)
- [ ] Add git hooks 
- [ ] Add more tests.
- [ ] Do finer error handling.
- [ ] Implement DDD at the API level using HATEOAS to obtain a business-oriented API.
- [ ] Dokerize the project


-- 
Author - [Fahem BELILI](https://belilifahem.com)



