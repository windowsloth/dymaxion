const arc = Math.atan(2);
      
function project(face, coord) {
  let p = [coord[0] * degrad, coord[1] * degrad];
  p = convertCartesian(p, icoL);
  let p1 = face.v1;
  let p2 = face.v2;
  let p3 = face.v3;
  let cos = Math.cos(arc);
  let a1, a2, a3;
  
  a1 = (2 * det(p2, p3, p) * cos) / (det(p2, p3, p) * cos - (det(p2, p1, p) + det(p1, p3, p)));
  a1 = Math.atan(a1);
  
  a2 = (2 * det(p1, p2, p) * cos) / (det(p1, p2, p) * cos - (det(p1, p3, p) + det(p3, p2, p)));
  a2 = Math.atan(a2);
  
  a3 = (2 * det(p3, p1, p) * cos) / (det(p3, p1, p) * cos - (det(p3, p2, p) + det(p2, p1, p)));
  a3 = Math.atan(a3);
  
  let x = 0.5 * (a2 - a3);
  let y = (2 * a1 - a2 - a3) / (2 * root3);
  
  return [x, y];
}