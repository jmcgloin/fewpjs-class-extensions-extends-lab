class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		return this.sides.reduce((peri, side) => peri + side, 0)
	}
}

class Triangle extends Polygon {

	get isValid() {
		if(this.countSides != 3) return false;
		return this.sides.reduce((validity, side) => validity = this.perimeter - side > side && validity, true)
	}
}

class Square extends Polygon {

	get isValid() {
		if(this.countSides != 4) return false;
		return this.sides.slice(1).filter(side => side != this.sides[0]).length == 0
	}

	get area() {
		return this.sides[0] ** 2
	}

}