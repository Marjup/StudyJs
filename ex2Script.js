// Compute the area of a triangle
// where lengths of its sides are 5, 6, 7.
// Heron's Formula

var aSide = 5;
var bSide = 6;
var cSide = 7;

var s = (aSide + bSide + cSide) / 2;

var triangleArea = Math.sqrt(s * (s - aSide) * (s - bSide) * (s - cSide));

console.log(triangleArea);
