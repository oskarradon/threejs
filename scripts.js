
// Set up
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const VIEW_ANGLE = 45;
const ASPECT = WIDTH/HEIGHT;
const NEAR = 0.1;
const FAR = 10000;
const container = document.querySelector('#container');
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
);
const scene = new THREE.Scene();
scene.add(camera);
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);


// Make a cube
// const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry( 100, 100, 100 ), cubeMaterial
// );
// cube.position.z = -300;
// scene.add(cube);


// Make a line
const lineMaterial = new THREE.LineDashedMaterial({
	color: 0x0000ff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
});
const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
const line = new THREE.Line(geometry, lineMaterial);
scene.add(line);

// Make a light
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);


// Animate the scene
function update() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
