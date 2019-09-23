
var uniqueInOrder = function(iterable) {
    
    let answer = [];
      for (let i = -1; i < iterable.length - 1; i++) {
        if (iterable[i] !== iterable[i + 1]) {
          answer.push(iterable[i + 1]);
        }
      }

    return answer
}

console.log(uniqueInOrder([1,2,2,3,3]));
