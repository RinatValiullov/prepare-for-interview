## Write a function that will match the names of the suspects in the received object with the elements of the array of the names of those killed. If the array of suspects includes all the names in the array with killed, then the function returns the name that matches the array of suspects.

***

Input1:
```
const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed = ["Pette", "Brad"];

getKiller(people, killed);
```

Output1: 
```
James is killer
```

Input2:
```
const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed = ["Matt", "George"];

getKiller(people, killed);
```

Output2: 
```
Grag is killer
```

Input3:
```
const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed = ["Dilan", "Lucas"];

getKiller(people, killed);
```

Output3:
```
Bill is killer
```

***
