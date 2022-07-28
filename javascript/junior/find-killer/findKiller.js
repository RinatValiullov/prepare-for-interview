const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed1 = ["Pette", "Brad"];
const killed2 = ["Matt", "George"];
const killed3 = ["Dilan", "Lucas"];

const compare = (target, source) =>
  source.every((name) => target.includes(name));

const getKiller = (suspect, dead) => {
  const suspectNames = Object.keys(suspect);
  const victimNames = Object.values(suspect);

  // const murders = [];

  for (let i = 0; i < victimNames.length; i++) {
    if (compare(victimNames[i], dead)) {
      // murders.push(suspectNames[i]);
      return `${suspectNames[i]} is killer`;
    } else {
      continue;
    }

    // if (murders.length > 1) {
    //   console.log(`${murders.join(" and ")} are killers`);
    // } else if (murders.length === 1) {
    //   console.log(`${suspectNames[i]} is killer`);
    // }
  }
};

const output1 = getKiller(people, killed1);
const output2 = getKiller(people, killed2);
const output3 = getKiller(people, killed3);

console.log(`For [${killed1}] -> ${output1}`);
console.log(`For [${killed2}] -> ${output2}`);
console.log(`For [${killed3}] -> ${output3}`);
