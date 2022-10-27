const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector(".canvas")
});     // links to the canvas in html  

renderer.setSize(window.innerWidth , window.innerHeight)
camera.position.z = 25;

const material = new THREE.LineBasicMaterial({ color: 0x44aa88 });

let n = 100 
let radius = 5;

tmax =4* Math.PI ;
tmin = 0;
 
let b = 1.5
let points = []

for (i = 0; i < n +1; i++) {
    let t = ( tmax/ n) * i
    let xNot =  Math.cos(t);
    let yNot =  Math.sin(t);
    let zNot = b*t
    points.push(new THREE.Vector3(xNot, yNot, zNot));


}
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const circle = new THREE.Line(geometry, material);
scene.add(circle);
renderer.render(scene, camera);

console.log('Vertices', points)
// console.log('yarr', yarr)
// console.log('tarr', tarr)




