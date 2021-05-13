## USE
创建子模块，然后再去创建子控制器
```
nest g mo <name> 
```
创建子控制器，子控制器的名字和子模块的名字一样，这样才能在相应的模块中加入控制器
```
nest g co <name>
```
创建业务层，名字和模块控制器一样。
```
nest g s <name>
```
取数据的装饰器
@Body() body
@Query() query
@Param() param

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

