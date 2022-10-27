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

var r = 5;  //radius of the circle
const tmax = 2*Math.PI;
const tmin = 0;
const total_points = 6;


for(let i = 0; i < total_points +1; i++){

    let t = ((tmax - tmin)/total_points) * (i) //(distance)
    let x = r*Math.cos(t)    // Ax +(Bx-Ax)*t   
    let y = r*Math.sin(t)    // Ay +(By-Ay)*t   
    c_points.push(new THREE.Vector3(x, y, 0))

}

const geometry = new THREE.BufferGeometry().setFromPoints(c_points);
const line = new THREE.Line(geometry, material);
scene.add(line);

renderer.render(scene, camera);




//(c_points[0].x, c_points[0].y, 0)