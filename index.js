let scene, camera, renderer, skyboxGeo, skybox;
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        60000
    );
    camera.position.set(500, -1000, 10000); // 10000 of camera at z to make camera go inside the skybox

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector(".canvas") })
    renderer.setSize(window.innerWidth, window.innerHeight);




    //  **************************************************************   
    const arr = ["./images/Daylight Box_front.bmp",
        "./images/Daylight Box_Back.bmp",
        "./images/Daylight Box_Top.bmp",
        "./images/Daylight Box_Bottom.bmp",
        "./images/Daylight Box_Right.bmp",
        "./images/Daylight Box_Left.bmp"] // array of paths of images for skybox setting.


    // loading texture from array given above of image paths 
    function createMaterialArray(filename) {
        const skyboxImagepaths = filename;
        const materialArray = skyboxImagepaths.map(image => {
            let texture = new THREE.TextureLoader().load(image);

            return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
        });
        return materialArray;
    }

    const materialArray = createMaterialArray(arr);
    skyboxGeo = new THREE.BoxGeometry(50000, 50000, 50000);
    skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    // ========================================================================



    // ********************************************************************
    // OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1000; //skybox min view
    controls.maxDistance = 12000; // skybox max view or zoomout 
    // =============================================================



    //function of creating instances of buildings
    function creategeo(width, height, depth, x, y, z, xs, ys, txt) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        let texturebuilding = new THREE.TextureLoader().load(txt);
        const material = new THREE.MeshBasicMaterial({ map: texturebuilding })
        const plane = new THREE.Mesh(geometry, material);
        plane.position.set(x, y, z)
        plane.scale.set(xs, ys)
        scene.add(plane);
    }
    //creating cubes or buildings
    creategeo(1000, 1000, 2000, -1800, -5000, 0, 1.3, 8, '/images/te.jpg')
    creategeo(1000, 1000, 2000, -3700, -5000, 0, 2, 10, '/images/1.jfif')
    creategeo(1000, 1000, 2000, 0, -5000, 0, 2, 10, '/images/2.jpg')
    creategeo(1000, 1000, 2000, 2000, -5000, 0, 1.5, 7, '/images/3.jpg')
    creategeo(1000, 1000, 2000, 3600, -5000, 0, 1.3, 8, '/images/4.jfif')
    creategeo(1000, 1000, 2000, 3400, -5000, 2500, 1.3, 6, '/images/5.jfif')
    creategeo(1000, 1000, 2000, 2000, -5000, -2500, 2, 15, '/images/6.jfif')
    creategeo(1000, 1000, 2000, -500, -5000, -2500, 2.5, 14, '/images/3.jpg')
    creategeo(1000, 1000, 2000, -3600, -5000, -2500, 2.5, 13, '/images/7.jfif')
    creategeo(1000, 1000, 2000, 1500, -5000, 2500, 1.3, 7, '/images/4.jfif')
    creategeo(1000, 1000, 2000, -500, -5000, 2500, 1.7, 8, '/images/7.jfif')
    creategeo(1000, 1000, 2000, -3000, -5000, 2500, 3, 5.2, '/images/6.jfif')


    animate();
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}

init();