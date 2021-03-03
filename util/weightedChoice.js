module.exports = (items) => {
  let maxNumber = 0;
  for (const item of items) {
    maxNumber += item.weight;
  }

  let randomNumber = Math.round(Math.random() * maxNumber);
  let index = 0;
  while (randomNumber > 0) {
    for (const [jindex, item] of items.entries()) {
      randomNumber -= item.weight;
      if (randomNumber < 0) {
        index = jindex;
        break;
      }
    }
  }
  return items[index].value;
};
