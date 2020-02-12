export {};

declare global {
  interface String {
    eightBitNumber(): boolean;
  }
}

String.prototype.eightBitNumber = function(): boolean {
  return +this >= 0 && 
         +this <= 255 && 
         this.length === (+this).toString().length
}

console.log("".eightBitNumber());   // false
console.log("0".eightBitNumber());  // true
console.log("00".eightBitNumber());  // false
console.log("197".eightBitNumber());  // true