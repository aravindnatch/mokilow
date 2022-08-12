import mokilow from '../index.js'

console.log("\n")
mokilow.warn("a warning message\n")
mokilow.error("an error message\n")
mokilow.info("an info message\n")
mokilow.debug("a debug message")

console.log("\n")
console.log("-----------------------------------------------------")
console.log("\n")

mokilow.warn("a warning message with time\n", true)
mokilow.error("an error message with time\n", true)
mokilow.info("an info message with time\n", true)
mokilow.debug("a debug message with time", true)
console.log("\n")
