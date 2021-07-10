// MINIMUM SPANNING TREE FOR ICOSAHEDRON FACES
// I think this will work?
// Each face has an ID and 3 points (a, b, c, represented in lat/lon)
// as well as an array of connections to other faces.

// Values for vertices in cartesian coordinates
const root3 = Math.sqrt(3);
const a = (1 + Math.sqrt(5)) / 2;
const b = 1 / root3;
const c = 2 / root3;
const d = a / root3;
const e = 2 * d;
const f = (a + 1) / root3;
const g = (a - 1) / root3;
const scalar = 1.0;
// const scalar = 3349.47025799;

// Objects for each face
const f0 = {
  v1: [ b * scalar, -1 * scalar, -f * scalar],
  v2: [-c * scalar,  0 * scalar, -f * scalar],
  v3: [ b * scalar,  1 * scalar, -f * scalar],
  data: [],
};
const f01 = {
  v1: [ b * scalar, -1 * scalar, -f * scalar],
  v2: [ b * scalar,  1 * scalar, -f * scalar],
  v3: [ e * scalar,  0 * scalar, -g * scalar],
  data: [],
};
const f02 = {
  v1: [ b * scalar, -1 * scalar, -f * scalar],
  v2: [-d * scalar, -a * scalar, -g * scalar],
  v3: [-c * scalar,  0 * scalar, -f * scalar],
  data: [],
};
const f03 = {
  v1: [-c * scalar,  0 * scalar, -f * scalar],
  v2: [-d * scalar,  a * scalar, -g * scalar],  
  v3: [ b * scalar,  1 * scalar, -f * scalar],
  data: [],
};
const f04 = {
  v1: [-c * scalar,  0 * scalar, -f * scalar],
  v2: [-e * scalar,  0 * scalar,  g * scalar],  
  v3: [-d * scalar,  a * scalar, -g * scalar],
  data: [],
};
const f05 = {
  v1: [-c * scalar,  0 * scalar, -f * scalar],
  v2: [-d * scalar, -a * scalar, -g * scalar],
  v3: [-e * scalar,  0 * scalar,  g * scalar],
  data: [],
};
const f06 = {
  v1: [ b * scalar, -1 * scalar, -f * scalar],
  v2: [ d * scalar, -a * scalar,  g * scalar],
  v3: [-d * scalar, -a * scalar, -g * scalar],
  data: [],
};
const f07 = {
  v1: [ e * scalar,  0 * scalar, -g * scalar],
  v2: [ d * scalar, -a * scalar,  g * scalar],
  v3: [ b * scalar, -1 * scalar, -f * scalar],
  data: [],
};
const f08 = {
  v1: [ e * scalar,  0 * scalar, -g * scalar],
  v2: [ b * scalar,  1 * scalar, -f * scalar],
  v3: [ d * scalar,  a * scalar,  g * scalar],
  data: [],
};
const f09 = {
  v1: [ b * scalar,  1 * scalar, -f * scalar],
  v2: [-b * scalar,  1 * scalar,  f * scalar],
  v3: [ d * scalar,  a * scalar,  g * scalar],
  data: [],
};
const f10 = {
  v1: [ d * scalar,  a * scalar,  g * scalar],
  v2: [-d * scalar,  a * scalar, -g * scalar],
  v3: [-b * scalar,  1 * scalar,  f * scalar],
  data: [],
};
const f11 = {
  v1: [-e * scalar,  0 * scalar,  g * scalar],
  v2: [-b * scalar,  1 * scalar,  f * scalar],
  v3: [-d * scalar,  a * scalar, -g * scalar],
  data: [],
};
const f12 = {
  v1: [-e * scalar,  0 * scalar,  g * scalar],
  v2: [-b * scalar, -1 * scalar,  f * scalar],
  v3: [-b * scalar,  1 * scalar,  f * scalar],
  data: [],
};
const f13 = {
  v1: [-e * scalar,  0 * scalar,  g * scalar],
  v2: [-d * scalar, -a * scalar, -g * scalar],
  v3: [-b * scalar, -1 * scalar,  f * scalar],
  data: [],
};
const f14 = {
  v1: [ d * scalar, -a * scalar,  g * scalar],
  v2: [-b * scalar, -1 * scalar,  f * scalar],
  v3: [-d * scalar, -a * scalar, -g * scalar],
  data: [],
};
const f15 = {
  v1: [ d * scalar, -a * scalar,  g * scalar],
  v2: [ c * scalar,  0 * scalar,  f * scalar],
  v3: [-b * scalar, -1 * scalar,  f * scalar],
  data: [],
};
const f16 = {
  v1: [ e * scalar,  0 * scalar, -g * scalar],
  v2: [ c * scalar,  0 * scalar,  f * scalar],
  v3: [ d * scalar, -a * scalar,  g * scalar],
  data: [],
};
const f17 = {
  v1: [ d * scalar,  a * scalar,  g * scalar],
  v2: [ c * scalar,  0 * scalar,  f * scalar],
  v3: [ e * scalar,  0 * scalar, -g * scalar],
  data: [],
};
const f18 = {
  v1: [ d * scalar,  a * scalar,  g * scalar],
  v2: [-b * scalar,  1 * scalar,  f * scalar],
  v3: [ c * scalar,  0 * scalar,  f * scalar],
  data: [],
};
const f19 = {
  v1: [-b * scalar,  1 * scalar,  f * scalar],
  v2: [-b * scalar, -1 * scalar,  f * scalar],
  v3: [ c * scalar,  0 * scalar,  f * scalar],
  data: [],
};

const ico = [
   f0, f01, f02, f03, f04, f05, f06, f07, f08, f09,
  f10, f11, f12, f13, f14, f15, f16, f17, f18, f19,
]

// Object that holds all the connections that describe the
// icosahedron's net, and attaches all the coorinates to those connections
// const ico = [
//   {
//     id: 0,
//     data: f0,
//     con: [1],
//   },
//   {
//     id: 1,
//     data: f01,
//     con: [0, 2],
//   },
//   {
//     id: 2,
//     data: f02,
//     con: [1, 4],
//   },
//   {
//     id: 3,
//     data: f03,
//     con: [2],
//   },
//   {
//     id: 4,
//     data: f04,
//     con: [2, 6],
//   },
//   {
//     id: 5,
//     data: f05,
//     con: [4],
//   },
//   {
//     id: 6,
//     data: f06,
//     con: [4, 8],
//   },
//   {
//     id: 7,
//     data: f07,
//     con: [6],
//   },
//   {
//     id: 8,
//     data: f08,
//     con: [6, 10],
//   },
//   {
//     id: 9,
//     data: f09,
//     con: [8],
//   },
//   {
//     id: 10,
//     data: f10,
//     con: [8, 12],
//   },
//   {
//     id: 11,
//     data: f11,
//     con: [10],
//   },
//   {
//     id: 12,
//     data: f12,
//     con: [10, 14],
//   },
//   {
//     id: 13,
//     data: f13,
//     con: [12],
//   },
//   {
//     id: 14,
//     data: f14,
//     con: [12, 16],
//   },
//   {
//     id: 15,
//     data: f14,
//     con: [14],
//   },
//   {
//     id: 16,
//     data: f16,
//     con: [14, 18],
//   },
//   {
//     id: 17,
//     data: f17,
//     con: [16],
//   },
//   {
//     id: 18,
//     data: f18,
//     con: [16, 20],
//   },
//   {
//     id: 19,
//     data: f19,
//     con: [18],
//   },
// ]