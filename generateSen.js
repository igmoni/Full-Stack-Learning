function generateSen(desc, arr) {
  
    let baseStr = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseStr += arr[i];
    } else {
      baseStr += `${arr[i]}, `;
    }
  }

  return baseStr;
}

console.log(
  generateSen("Highest mountains", ["Mt Everest", "K2"])
);
