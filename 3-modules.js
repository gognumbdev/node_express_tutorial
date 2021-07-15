//* Modules - Encapsulated Code (only share minimum)
//* CommonJS every file is module (by default)

const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade")
sayHi(names["biden"])
sayHi(names['trudeau'])
sayHi(names['johnson'])


 