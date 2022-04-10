let t = parseInt(readline()),
  rock = "pedra",
  paper = "papel",
  scissors = "tesoura",
  lizard = "lagarto",
  spock = "Spock",
  won = ": Bazinga!",
  cheated = ": Raj trapaceou!",
  drawn = ": De novo!",
  l = "Caso #",
  i;

for (i = 1; i <= t; i++) {
  let str = readline(),
    strArr = str.split(" "),
    [sheldon, raj] = [...strArr];
  if (sheldon === scissors && raj === paper) {
    //   Number - 1. scissors cuts paper;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === paper && raj === scissors) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === paper && raj === rock) {
    //   Number - 2. paper covers rock;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === rock && raj === paper) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === rock && raj === lizard) {
    //   Number - 3. rock crushes lizard;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === lizard && raj === rock) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === lizard && raj === spock) {
    //   Number - 4. lizard poisons Spock;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === spock && raj === lizard) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === spock && raj === scissors) {
    //   Number - 5. Spock smashes scissors;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === scissors && raj === spock) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === scissors && raj === lizard) {
    //   Number - 6. scissors decapitates lizard;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === lizard && raj === scissors) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === lizard && raj === paper) {
    //   Number - 7. lizard eats paper;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === paper && raj === lizard) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === paper && raj === spock) {
    //   Number - 8. paper disproves Spock;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === spock && raj === paper) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === spock && raj === rock) {
    //   Number - 9. Spock vaporizes rock;

    console.log(`${l}${i}${won}`);
  } else if (sheldon === rock && raj === spock) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === rock && raj === scissors) {
    //   Number - 10. rock crushes scissors.

    console.log(`${l}${i}${won}`);
  } else if (sheldon === scissors && raj === rock) {
    console.log(`${l}${i}${cheated}`);
  } else if (sheldon === raj) {
    console.log(`${l}${i}${drawn}`);
  }
}
