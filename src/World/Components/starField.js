import {
  Geometry,
  MathUtils,
  Math,
  Points,
  PointsMaterial,
  Vector3
} from 'three';

const createStarField = () => {
  var starsGeometry = new Geometry(); // creates new geometry

for ( var i = 0; i < 10000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered

	var star = new Vector3(); 
	star.x = Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles
	star.y = Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles
	star.z = Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles

	starsGeometry.vertices.push( star );
}

var starsMaterial = new PointsMaterial( { color: 0xffffff } );

var starField = new Points( starsGeometry, starsMaterial );
  
  const radiansPerSecond = MathUtils.degToRad(5);

  // this method will be called once per frame
  starField.tick = (delta) => {
    // increase the starField's rotation each frame
    starField.rotation.z += radiansPerSecond * delta;
    starField.rotation.x += radiansPerSecond * delta;
    starField.rotation.y += radiansPerSecond * delta;
  };

  return starField;
}

export { createStarField };