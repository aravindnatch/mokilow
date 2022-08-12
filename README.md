# mokilow

Just another simple logging package with support for timestamps. Best used to generate colored/pretty logs in a syslog environment.

## Usage

Using mokilow is straightforward. By default, the time is not included within the logging statement.

```js
mokilow.warn("a warning message")
mokilow.error("an error message")
mokilow.info("an info message")
mokilow.debug("a debug message")

mokilow.warn("a warning message with time", true)
mokilow.error("an error message with time", true)
mokilow.info("an info message with time", true)
mokilow.debug("a debug message with time", true)

```

The code above produces:

![Screenshot](https://raw.githubusercontent.com/aravindnatch/mokilow/master/demo.png)

## Installation
Install the package using the command below

```sh
npm i mokilow
```

## Tests
Run the written unit tests for the package with the commands below.

```sh
git clone https://github.com/aravindnatch/mokilow.git
npm install
npm test
```