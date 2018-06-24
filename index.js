"use strict";

module.exports = str => {
  if (!str || !str.trim()) {
    return false;
  }
  // get all series of digits followed by non digits
  const matches = str.match(/\d+[\D]*/g);

  // if some aren't followed by 3 exclamations, return false
  const hasBangs = matches.every((m, i) => i === matches.length - 1 || m.replace(/[^!]/g, "").length === 3);
  if (!hasBangs) {
    return false;
  }

  // must be at least one pair
  if (matches.length <= 1) {
    return false;
  }

  // extract numbers from matches
  const numbers = matches.map(m => parseInt(m.replace(/\D/g, "")));

  // see if each pair adds up to 15
  const pairsAddUp = numbers.every((n, i) => {
    if (i === numbers.length - 1) {
      return true;
    }
    return n + numbers[i + 1] === 15;
  });

  return pairsAddUp;
};
