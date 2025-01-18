class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let rect1 = new Rectangle(5, 10);
console.log(rect1.area());
