import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

const geometry = new THREE.CylinderGeometry(2,2,3,50);
const material = new THREE.MeshBasicMaterial({ color: 'crimson', wireframe:true});
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

function animate(){
    window.requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    sphere.rotation.y -= 0.005;
    sphere.rotation.z -= 0.005;
    controls.update();
    renderer.render(scene, camera);
}

animate();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
controls.update();
