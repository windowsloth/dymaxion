let land;

let svg = d3.select('body').append('section')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500);

async function getRawMap(src) {
  const result = d3.json(src);
  return await result;
}
getRawMap('https://cdn.glitch.com/64afa91d-f0c7-4109-aa8b-1bc589bbf65c%2Fmain_landmass.geojson?v=1623780822956').then( (result) => {
  land = result;
  let testland = land.features[1];
  console.log(land);
  // let testprojection = d3.geoAirocean()
  //   // .fitSize([500, 500], testland);
  //   .translate([200, 150])
  //   .scale(25);
  
  // let gratgen = d3.geoGraticule();
  
  // testprojection.;
  // console.log(testprojection.tree());
  // let testgen = d3.geoPath()
  //   .projection(testprojection);
  // svg.append('path')
  //   .datum(testland)
  //   .attr('d', testgen)
  //   .attr('fill', '#ffffff')
  //   .attr('stroke', '#000000');
  
  // console.log(testland);
});

// d3.geoMercator();