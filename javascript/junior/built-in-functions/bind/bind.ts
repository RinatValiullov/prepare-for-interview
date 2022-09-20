interface User {
  nick: string;
  age: number;
}

const bind = (
  context: {},
  fn: any,
  ...args: (string | number | undefined)[]
) => {
  return function (...rest: any[]) {
    return fn.call(context, ...args, ...rest);
  };
};

const log = function (this: User, ...props: any[]) {
  const result = {
    nickName: this.nick,
    age: this.age,
    ...props
  };
  return Object.values(result).join(", ");
};

const user: User = {
  nick: "tor",
  age: 18
};

const bounded1 = bind(user, log, "str", 159);

const sum = function (this: any, x: number, y: number) {
  return this.x + this.y;
};

const bounded2 = bind({ x: 4, y: 5 }, sum);

console.log(bounded1({ prop: "JS" }));
console.log(bounded2());
