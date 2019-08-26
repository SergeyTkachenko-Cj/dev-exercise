
const doggoIsAGoodBoy = false;

const willGetABone = new Promise((resolve, reject) => {
  if (doggoIsAGoodBoy) {
    const bone = {
      meat : 'angus',
      size : 'huge'
    };

    resolve(`gets the bone: meat - ${bone.meat}, size - ${bone.size}`);
  }
  else {
    const why = 'pooped on the floor';
    reject(`gets no bone: ${why}`);
  }
});

const decision = () => {
  willGetABone
  .then(approved => console.log(approved))
  .catch(rejected => console.log(rejected));
};

decision();
