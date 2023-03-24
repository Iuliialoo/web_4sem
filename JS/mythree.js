const div = document.querySelector('.threejs');

document.forms[0].addEventListener('change', (e) => {
    material_change.color.set(e.target.value);
})
  
window.addEventListener('resize', onWindowResize);

function onWindowResize() {

camera.aspect = div.clientWidth / div.clientHeight;
camera.updateProjectionMatrix();

renderer.setSize(div.clientWidth, div.clientHeight);

}  

// const material = new THREE.MeshBasicMaterial( { color: 0xAAAAAA, wireframe: true } );
const material_change = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, flatShading: true } );
const material_purple = new THREE.MeshPhongMaterial({color: 0XA98BFF, flatShading: true});
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x444444, flatShading: true });

const scene = new THREE.Scene();
scene.background = new THREE.Color('gray');

const camera = new THREE.PerspectiveCamera(50, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(0, 8, 25);
cameraTarget = new THREE.Vector3(0, 2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);
div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

let intensity = 1;

const btn_light = document.querySelector('.on-off-light')
btn_light.addEventListener('click', (event) => {
    if (intensity !== 1) {
        intensity = 1;
        // directionalLightLeft.intensity = 1;
        // directionalLightRight.intensity = 1;
        // directionalLightFront.intensity = 1;
        spotLightLeft.intensity = 1;
        spotLightRight.intensity = 1;
    }
    else {
        intensity = 0;
        spotLightLeft.intensity = 0
        spotLightRight.intensity = 0;
    }
})

const spotLightLeft = new THREE.SpotLight(0xffffff, intensity);
spotLightLeft.position.set(-15, 5, 0);
spotLightLeft.target.position.set(0, 2, 10);
spotLightLeft.castShadow = true;

const spotLightRight = new THREE.SpotLight(0xffffff, intensity);
spotLightRight.position.set(15, 5, 0);
spotLightRight.target.position.set(0, 2, 10);
spotLightRight.castShadow = true;

scene.add(spotLightLeft);
scene.add(spotLightRight);

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// hemiLight.position.set(0, 200, 0);
// scene.add(hemiLight);

// const directionalLightLeft = new THREE.DirectionalLight(0xffffff, intensity);
// directionalLightLeft.position.set(-15, 5, -5);
// directionalLightLeft.target.position.set(0, 2, 10);
// directionalLightLeft.castShadow = true;

// directionalLightLeft.shadow.mapSize.width = 2000; // default
// directionalLightLeft.shadow.mapSize.height = 2000; // default
// directionalLightLeft.shadow.camera.top = 10;
// directionalLightLeft.shadow.camera.bottom = - 10;
// directionalLightLeft.shadow.camera.left = - 10;
// directionalLightLeft.shadow.camera.right = 10;

// const directionalLightRight = new THREE.DirectionalLight(0xffffff, intensity);
// directionalLightRight.position.set(15, 5, -5);
// directionalLightRight.target.position.set(0, 2, 10);
// directionalLightRight.castShadow = true;

// directionalLightRight.shadow.mapSize.width = 2000; // default
// directionalLightRight.shadow.mapSize.height = 2000; // default
// directionalLightRight.shadow.camera.top = 10;
// directionalLightRight.shadow.camera.bottom = - 10;
// directionalLightRight.shadow.camera.left = - 10;
// directionalLightRight.shadow.camera.right = 10;

// const directionalLightFront = new THREE.DirectionalLight(0xffffff, intensity);
// directionalLightFront.position.set(0, 5, 20);
// directionalLightFront.target.position.set(0, 5, 0);
// directionalLightFront.castShadow = true;

// directionalLightFront.shadow.mapSize.width = 2000; // default
// directionalLightFront.shadow.mapSize.height = 2000; // default
// directionalLightFront.shadow.camera.top = 10;
// directionalLightFront.shadow.camera.bottom = - 10;
// directionalLightFront.shadow.camera.left = - 10;
// directionalLightFront.shadow.camera.right = 10;

// scene.add(directionalLightLeft);
// scene.add(directionalLightRight);
// scene.add(directionalLightFront);


const plane = new THREE.PlaneGeometry(1000, 1000, 32, 32);
const planeMesh = new THREE.Mesh(plane, material_change);
planeMesh.rotation.x = - Math.PI / 2;
planeMesh.position.y = 0;
planeMesh.receiveShadow = true;
scene.add(planeMesh);


// create a cube with buffer geometry
const geometry_wall = new THREE.BufferGeometry();
const vertices_wall = new Float32Array( [
    -15, 0, 0,
    15, 10, 0,
    -15, 10, 0,

    -15, 0, 0,
    15, 0, 0,
    15, 10, 0,
] );

geometry_wall.setAttribute( 'position', new THREE.BufferAttribute( vertices_wall, 3 ) );
const mesh_wall = new THREE.Mesh( geometry_wall, material_purple );
mesh_wall.position.set(0, 0, -3)
// mesh_wall.castShadow = true;
mesh_wall.receiveShadow = true;
scene.add( mesh_wall);

const geometry_box = new THREE.BoxGeometry( 6, 6, 6 );
const mesh_box = new THREE.Mesh( geometry_box, material_change );
mesh_box.position.set(-6, 3, 1);
mesh_box.castShadow = true;
mesh_box.receiveShadow = true;

scene.add( mesh_box);


const geometry_piramid = new THREE.BufferGeometry();
const vertices = new Float32Array( [
	3, 0, 3,
	3, 0,  -3,
	-3, 0,  3, 

    3, 0,  -3,
	-3, 0, -3, 
	-3, 0,  3,

    3, 0, 3,
    3, 0,  -3,
    0, 5, 0,

    -3, 0,  3,
    3, 0, 3,
    0, 5, 0,

    -3, 0, -3, 
    -3, 0,  3,
    0, 5, 0,

    3, 0,  -3,
    -3, 0, -3, 
    0, 5, 0
] );

geometry_piramid.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const mesh_piramid = new THREE.Mesh( geometry_piramid, material_change );
mesh_piramid.position.x = 5;
// mesh_piramid.position.set(-12, 0, 2);
mesh_piramid.castShadow = true;
mesh_piramid.receiveShadow = true;
scene.add( mesh_piramid);


let delta = 0.0;

const btn = document.querySelector('.run-stop')
btn.addEventListener('click', (event) => {
    if (delta !== 0.0) delta = 0;
    else delta = 0.01;
})

const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame( animate );

    mesh_box.rotation.y += delta;
    mesh_piramid.rotation.y += delta;
    // mesh_wall.rotation.y += 0.01;

    // const elapsedTime = clock.getElapsedTime()
    // camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
    // camera.position.z = Math.sin(elapsedTime * 0.5) * 2;

    camera.lookAt(cameraTarget);

    renderer.render( scene, camera );
}
animate();
