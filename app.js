var count = 0;

function countBirds() {
  let count = 0;
  function counter() {
    count++;
    return count + ' birds';
  }
  return counter;
}

function countDogs() {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

function agu() {
  let lvl = 0;
  return () => {
    lvl++;
    if (lvl === 10) console.log(`Divigolve....I'm Greymon now!`);
    if (lvl >= 10) return `lvl ${lvl} Greymon`;
    return `lvl ${lvl} Agumon`;
  }
}

function gabu() {
  let lvl = 0;
  return () => {
    lvl++;
    if (lvl == 10) console.log(`Divigolve....I'm Garurumon now!`);
    if (lvl >= 10) return `lvl ${lvl} Garurumon`;
    return `lvl ${lvl} Gabumon`;
  }
}