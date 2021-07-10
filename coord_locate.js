// Receives an array of zones and an array of points to test against said zones
// function locator(arr, zones) {
//   for (let coord of arr) {
//     const lat = coord[0];
//     const lon = coord[1];
    
//   }
// }
const icoL = Math.sqrt((1 + Math.sqrt(5)) / 2 + 2);
const degrad = Math.PI / 180;

// Receives a face object from the icosahedron and array of points to test against the face
// and returns true if the point is within the face
// function locator(arr, zone) {
//   const R = Math.sqrt((1 + Math.sqrt(5)) / 2 + 2);
//   const $a = convertSpherical(zone.data.v1, R);
//   const $b = convertSpherical(zone.data.v2, R);
//   const $c = convertSpherical(zone.data.v3, R);
//   const lat = arr[0]
//   const lon = arr[1];
  
//   // if ((lat > $a[0]) !== (lat > $b[0]) &&
//   //     (lon > $a[1]) !== (lon > $b[1]) &&
//   //     (lat > $b[0]) !== (lat > $c[0]) &&
//   //     (lon > $b[1]) !== (lon > $c[1]) &&
//   //     (lat > $c[0]) !== (lat > $a[0]) &&
//   //     (lon > $c[1]) !== (lon > $a[1])
//   //    ) {
//   //   // Since lat/lon are both angles, we can use them to easily determine if a point falls within
//   //   // each face. For each pair of vertices, the points angle must be less that or equal to one
//   //   // and greater than or equal to the other in order to fall inside the triangle.
//   //   return true
//   // } else {
//   //   console.log($a, $b, $c);
//   //   console.log('not this face! ' + zone.id);
//   // }
  
//   //Longitude Test
//   let lonin = false;
//   if ((lon >= $a[1]) !== (lon >= $b[1]) &&
//       (lon >= $b[1]) !== (lon >= $c[1]) &&
//       (lon >= $c[1]) !== (lon >= $a[1])) {
//       lonin = true;
//       console.log(lonin);
//   } else {
//     console.log(lon + " vs " + $a[1]);
//     console.log(lon + " vs " + $b[1]);
//     console.log(lon + " vs " + $c[1]);
//   }
// }

function convertSpherical(arr, R) {
  // Accepts an array of coordinates (x, y, z) and a radius
  // The ternary operators just ensure that the result should always be in positive radians (likely not necessary)
  let lat = Math.asin(arr[2] / R);
  // lat = (lat > 0) ? lat : lat + Math.PI * 2;
  let lon = Math.atan2(arr[1], arr[0]);
  // lon = (lon > 0) ? lon : lon + Math.PI * 2;
  return [lat, lon];
}

function convertCartesian(arr, R) {
  // Accepts an array of coordinates (lat, lon) and a radius
  let x = R * Math.cos(arr[0]);
  let y = R * Math.cos(arr[0]) * Math.sin(arr[1]);
  let z = R * Math.sin(arr[1]);
  
  return [x, y, z];
}

function det(p1, p2, p3, val) {
  // Accepts 3 points and finds the determinant
  // If a 4th argument is provided the function returns a boolean based on the determinant's sign
  const t1 = p1[0] * p2[1] * p3[2];
  const t2 = p1[1] * p2[2] * p3[0];
  const t3 = p1[2] * p2[0] * p3[1];
  const t4 = p1[2] * p2[1] * p3[0];
  const t5 = p1[1] * p2[0] * p3[2];
  const t6 = p1[0] * p2[2] * p3[1];
  const result = t1 + t2 + t3 - t4 - t5 - t6;
  
  if (!val) {
    return result;
  } else {
    return result > 0;
  }
}

function insideTri(face, p) {
  if (det(face.v1, face.v2, p, true) && det(face.v1, p, face.v3, true) &&
      det(p, face.v2, face.v3, true)
     ) {
    return true;
  } else {
    // console.log('outside');
  }
}

function locator(face, feature) {
  for (let coord of feature) {
    let poi = [coord[0] * degrad, coord[1] * degrad];
    poi = convertCartesian(poi, icoL);
    // console.log(poi);
    // insideTri(face, poi);
    for (let i = 0; i < 20; i++) {
      if(insideTri(ico[i], poi)) {
        let projected = project(ico[i], poi)
        ico[i].data.push(projected);
        console.log(i);
      }
    }
  }
}