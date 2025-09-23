import GUI from 'lil-gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('canvas');


const ambientLight = new THREE.AmbientLight('white', 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight('white', 1);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

const point = new THREE.PointLight('white', 2, 10, 1);
point.position.set(.2, -0.5, 1.3);
scene.add(point);

const drectionalhelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(drectionalhelper);

const pointhelper = new THREE.PointLightHelper(point, 0.2);
scene.add(pointhelper);



const renderer = new THREE.WebGLRenderer({ canvas });


const loader = new THREE.TextureLoader();
const color = loader.load('./design/color.jpg')
const normal = loader.load('./design/normal.png');
const roughness = loader.load('./design/roughness.jpg');
const height = loader.load('./design/height.png');


const geometry = new THREE.BoxGeometry(3, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({ map: color, roughnessMap: roughness, normalMap: normal, displacementScale: 0, displacementMap: height });
const sphere = new THREE.Mesh(geometry, material);
const controls = new OrbitControls(camera, renderer.domElement);



scene.add(sphere);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
camera.position.z = 5;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix()
})

function animate() {
    window.requestAnimationFrame(animate);
    // sphere.rotation.y += 0.005;
    // sphere.rotation.y -= 0.005;
    // sphere.rotation.z -= 0.005;
    controls.update();
    renderer.render(scene, camera);
}

animate();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
controls.update();
