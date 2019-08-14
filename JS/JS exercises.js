const getTempOfTmrw = (avgTemperatures) => { // object destructuring
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
};


const varSwap = (a, b) => { // array destructuring
  let A = a;
  let B = b;
  [B, A] = [A, B];
  return [A, B];
};


const destrucSlice = (array) => { // array slice method with destructuring
  const [,, ...arr] = array;
  return arr;
};


const destrFuncParam = (m) => { // object destructuring as function parameters
  const obj = {
    mass: 20,
    velocity: 2,
    power: 5,
    speed: 3 ** 8,
    accelaration: 3,
  };

  obj.mass = m;

  const energy = ({ mass, speed }) => mass * (speed ** 2); // e = mc2

  return energy(obj);
};


console.log(getTempOfTmrw({ today: 77.5, tomorrow: 79 }));
console.log(varSwap(1, 2));
console.log(destrucSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(destrFuncParam(50));
