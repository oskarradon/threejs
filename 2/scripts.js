const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
  45, window.innerWidth / window.innerHeight, 1, 500 
  ); // FOV, aspect ratio, near & far clipping plane

camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
const line = new THREE.Line(geometry, material);

scene.add(line);


function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();