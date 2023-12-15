let scene, camera, renderer, funnel, light;
let rotationSpeedX = 0.01;
let rotationSpeedY = 0.01;

function init() {
    // Scene
    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x333333);
    document.body.appendChild(renderer.domElement);

    // Funnel Geometry
    const geometry = new THREE.ConeGeometry(2, 4, 32, 32, true);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: true });
    funnel = new THREE.Mesh(geometry, material);
    scene.add(funnel);

    // Lighting
    light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Window resize
    window.addEventListener('resize', onWindowResize, false);

    // Keydown event
    document.addEventListener('keydown', onDocumentKeyDown, false);

    // Animation
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Apply rotation
    funnel.rotation.x += rotationSpeedX;
    funnel.rotation.y += rotationSpeedY;

    // Render
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    // Adjust these key codes according to your preference
    if (keyCode == 87) { // W key
        rotationSpeedX += 0.01;
    } else if (keyCode == 83) { // S key
        rotationSpeedX -= 0.01;
    } else if (keyCode == 65) { // A key
        rotationSpeedY -= 0.01;
    } else if (keyCode == 68) { // D key
        rotationSpeedY += 0.01;
    }
}

init();
