const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector(".canvas")});
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({ color: 0x44aa88 });

let n = 400
let a =2
let b = 5
let c =010  
let points = []
// let xarr = []
// let yarr = []
// let tarr = []

for (i = 0; i < n; i++) {
    let t = (5*Math.PI / n) * i
    let xNot = ( Math.sin(c * t) ) ;
    let yNot = ( Math.sin(t) ) ;
    let zNot =  Math.cos(c * t)
    points.push(new THREE.Vector3(xNot, yNot, zNot));


}
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const circle = new THREE.Line(geometry, material);
scene.add(circle);
renderer.render(scene, camera);

console.log('Vertices', points)
// console.log('yarr', yarr)
// console.log('tarr', tarr)




