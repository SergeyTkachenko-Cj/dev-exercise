
const serverImitation = (response) => {
  const trueOrFalse = response;

  const serverResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
      const serverPermission = trueOrFalse;
      
      if (serverPermission) resolve('permission granted');
      else {
        const err = new Error('permission denied');
        reject(err);
      }
    }, 1000);
  });

  const serverCall = () => {
    serverResponse.then((good) => console.log(good)).catch((bad) => console.log(bad));
  };

  serverCall();
};

serverImitation(true);
