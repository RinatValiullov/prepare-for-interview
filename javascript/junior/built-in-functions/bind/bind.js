"use strict";
const bind = (context, fn, ...args) => {
    return function (...rest) {
        return fn.call(context, ...args, ...rest);
    };
};
const log = function (...props) {
    console.log(this.nick, this.age, ...props);
};
const user = {
    nick: "tor",
    age: 18
};
const bounded1 = bind(user, log, "str", 159);
const sum = function (x, y) {
    return this.x + this.y;
};
const bounded2 = bind({ x: 4, y: 5 }, sum);
console.log(bounded1({ prop: "JS" }));
console.log(bounded2());
