//  [Predict+Code] Why is 0.1 + 0.2 === 0.3 false? Write almostEqual(a, b) using Number.EPSILON and test with 3 edge
// cases.

let a = 0.1;
let b = 0.2;
let c = 0.3;
console.log(a + b === c);
// why false ?
console.log(typeof a, typeof b);
console.log(typeof c);
console.log(typeof (a + b)); // all three having type as number still false why?

// JavaScript uses IEEE 754 double-precision floating-point representation.

// Numbers like 0.1 and 0.2 cannot be represented exactly in binary floating-point.

// Their sum becomes something like 0.30000000000000004.

// So strict equality (===) fails because it compares exact bit patterns, not "close enough" values.

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3)); // true ✅ (floating-point issue fixed)
console.log(almostEqual(1.0000001, 1.0000002)); // true ✅ (tiny difference)
console.log(almostEqual(1000000.1, 1000000.2)); // false ❌ (difference too large)

// Floating-point ≠ exact math.
// Use almostEqual when comparing decimals.
// For integers or exact values, === is fine.

// Predict] [] + [], [] + {}, 1 + '2', '3' - 1, true + true, null + 1, undefined + 1, '5' * '2'. Explain each rule
// (ToPrimitive, ToNumber)

console.log([] + []);
console.log([] + {});
console.log(1 + '2');
console.log('3' - 1);
console.log(true + true);
console.log(null + 1);
console.log(undefined + 1);
console.log('5' * 2);
console.log('5' % 2);
console.log('5' / 2);
