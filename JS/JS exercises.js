'use strict';

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.arg = arguments;
  }

  area() {
    return this.arg.length === 1 ? this.w * this.w : this.w * this.h
  }
}

class Square extends Rectangle {
  constructor(w) {
    super(w);
  }
}

const sqr = new Square(3);
const rect = new Rectangle(3, 4);

console.log(sqr.area() +' '+ rect.area());