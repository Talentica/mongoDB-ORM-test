"use strict";
exports.__esModule = true;

// if you copy the build inside node_modules
// const d = require("build/decorators");
// const s = require("build/services");

// make sure the path is correct
const d = require("../mongoDB-ORM/build/decorators");
const s = require("../mongoDB-ORM/build/services");

d.foo();
d.foo2();
s.bar();
s.bar2();
