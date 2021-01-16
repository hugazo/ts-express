### Typescript Express API

This is a simple express api. This readme file should be growing with each iteration.

## Features

- Express API with strong Type Denotation
- Typescript Compliant
- Added airbnb-eslint support for ts files
- Docker Image Compose
- MongoDB database
- Module Aliases

## Setup

```env
# .env
NODE_ENV=development # Unused for now
PORT= # API Port
DB_USER= # MongoDB Username
DB_PASSWORD= # MongoDB Password
DB_SERVER= # MongoDB Server
DB_NAME= # MongoDB Database Name
```

## Known Issues

- Atom needs eslint plugin config to lint the ts files [More Info Here](https://github.com/AtomLinter/linter-eslint/issues/1293)


## Roadmap

- Add params to docker build to use node specified in .nvmrc
- Add git hooks to lint before commit
