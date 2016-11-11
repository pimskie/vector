/**
 * Sources:
 * https://github.com/processing/p5.js
 * https://github.com/bit101/CodingMath
 */

class Vector {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	add(x, y) {
		return new Vector(this.x + x, this.y + y);
	}

	addSelf(vec) {
		this.x += vec.x;
		this.y += vec.y;
	}

	subtract(vec) {
		return new Vector(this.x - vec.x, this.y - vec.y);
	};

	substractSelf(vec) {
		this.x -= vec.x;
		this.y -= vec.y;
	}

	divide(val) {
		return new Vector(this.x / val, this.y /val);
	};

	divideSelf(val) {
		this.x = this.x / val;
		this.y = this.y / val;
	};

	multiply(val) {
		return new Vector(this.x * val, this.y * val);
	};

	multiplySelf(val) {
		this.x *= val;
		this.y *= val;
	};

	normalize() {
		const len = 1 / this.length;

		this.x *= len;
		this.y *= len;
	}

	// https://github.com/processing/p5.js/blob/master/src/math/p5.Vector.js#L536
	limit(max) {
		const length = this.length;

		if(length > max*max) {
			this.divideSelf(Math.sqrt(length)); //normalize it
			this.multiplySelf(max);
		}
	}

	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	set length(l) {
		const angle = this.angle;

		this.x = Math.cos(angle) * l;
		this.y = Math.sin(angle) * l;
	};

	get angle() {
		return Math.atan2(this.y, this.x);
	}

	set angle(a) {
		const l = this.length;

		this.x = Math.cos(a) * l;
		this.y = Math.sin(a) * l;
	};
}
