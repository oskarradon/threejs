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


const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000 });

const cube = new THREE.Mesh(
  new THREE.BoxGeometry( 100, 100, 100 ), cubeMaterial
);

cube.position.z = -300;

scene.add(cube);

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

function update() {
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
