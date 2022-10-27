const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector(".canvas")
}); 
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.z = 0;
let rainDrop;
const rainCount = 10000;

scene.background = new THREE.Color( 0x000000 );

const animate = () => {
    rainGeo.vertices.forEach(p => {
        p.velocity -= 0.0001 + Math.random()*0.0001 ;
        p.y += p.velocity;
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    rainGeo.verticesNeedUpdate = true;
    rain.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate)
}

let delta_x = 10000;
let delta_y = 8000;
let xNot = 20;
let yNot = 10;
let pK = (2 * delta_y) - delta_x




let rainGeo = new THREE.Geometry();
// for (let i = 0; i < rainCount; i++) {
//     rainDrop = new THREE.Vector3(
//         Math.random() * 400-200,
//         Math.random() * 500-200,
//         Math.random() * 400-200
//     );
for (let i = 0; i < delta_x; i++) {
    if (pK > 0) {
        pK = pK + (2 * delta_y - 2 * delta_x);
       rainDrop =   new THREE.Vector3(xNot += 1 *Math.random()*400-100, yNot = yNot+1 *Math.random()*400-100, Math.random()*400-100 )  ;

    }
    else if (pK < 0) {
        pK = pK + 2 * delta_y
        rainDrop =  new THREE.Vector3(xNot += 1, yNot = yNot, 0);

    }
    rainDrop.velocity = {};
    rainDrop.velocity = 0;
    rainGeo.vertices.push(rainDrop);
}
console.log(rainGeo)
  


const material = new THREE.PointsMaterial({
    color: 0xaaaaaaa, size:0.75,polygonOffsetFactor:1,
    transparent: true
});
const rain = new THREE.Points(rainGeo, material);
scene.add(rain);
for(rainanimate = 0 ; rainanimate<50;rainanimate++){
    animate()
}










