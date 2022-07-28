const people = {
  James: ["Sally", "Brad", "Pette"],
  Grag: ["George", "Matt", "Pette"],
  Bill: ["Dilan", "Lucas"]
};

const killed = ["Pette", "Brad"];

const compare = (target, source) =>
  source.every((name) => target.includes(name));

const getKiller = (suspect, dead) => {
  for (const name in suspect) {
    const meet = suspect[name];

    if (compare(meet, dead)) {
      console.log(
        "%c%s",
        "color: chartreuse; font: 1.4rem/1 Verdana",
        `${name} is killer`
      );
    } else {
      return;
    }
  }
};

getKiller(people, killed);
