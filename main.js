
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector(".canvas")
});     // links to the canvas in html  

renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement); //creates new canvas

camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

//material 
const material = new THREE.MeshBasicMaterial({ color: 0xFFD700 });

// line
var c_points = [];

const tmax = Math.PI;
const tmin = 0;
let n =25

for(let i = 0; i < 20; i++){

    let t = ((tmax - tmin)) * (i) //(distance)
    let x = n*Math.cos(t)    // Ax +(Bx-Ax)*t   
    let y = n*Math.sin(t)    // Ay +(By-Ay)*t   
    c_points.push(new THREE.Vector2(x, y))

}

const geometry = new THREE.BufferGeometry().setFromPoints(c_points);
const line = new THREE.Line(geometry, material);
scene.add(line);

renderer.render(scene, camera);




//(c_points[0].x, c_points[0].y, 0)