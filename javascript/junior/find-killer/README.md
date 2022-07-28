## Write a function that will match the names of the suspects in the received object with the elements of the array of the names of those killed. If the array of suspects includes all the names in the array with killed, then the function returns the name that matches the array of suspects.

***

Input:
```
const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed = ["Pette", "Brad"];

getKiller(people, killed);
```

Output: 
```
James is killer
```

***
