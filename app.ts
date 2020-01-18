// if you copy the build inside node_modules
import { foo, foo2 } from "build/decorators"
import { bar, bar2 } from "build/services"

// make sure the path is correct
// import { foo, foo2 } from "../mongoDB-ORM/build/decorators"
// import { bar, bar2 } from "../mongoDB-ORM/build/services"

foo()
foo2()
bar()
bar2()
