# test-command-line-js

Project for testing purposes. The objective if to run eslint with predefined rules in any project using npm command line.

## Installation

```bash
npm install
```

after install is necessary to run the following command to link the package to the global npm folder

```bash
npm link
```

## Usage

To run with npx use the following command in the target project:

```bash
npx g11n-lint run
```

This command will run eslint with the rules defined .eslintrc.js file in the target project.

To list the available command run the following command:

```bash
npx g11n-lint -h
```
