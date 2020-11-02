
import * as THREE from "/build/three.module.js";
import {OrbitControls} from "/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "/jsm/loaders/GLTFLoader.js";


var container;
var sceneWidth;
var sceneHeight;
var scene;
var renderer;
var camera;
var controls;

init();

function init(){
    createScene();
    update();
}

function createScene(){
    sceneWidth =  window.innerWidth;//
    sceneHeight = window.innerHeight;//

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);


    renderer = new THREE.WebGLRenderer( {antialias:true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sceneWidth,sceneHeight);
    
    //canvas
    container = document.getElementById("container");  
    container.appendChild(renderer.domElement);
    //camara 
    

    camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 500);
     
    //camera = new THREE.PerspectiveCamera(60, sceneWidth / sceneHeight,1,1000);
    camera.position.set(0,0,0);

    
    //luz

    let light = new THREE.DirectionalLight(0xffffff, 1.8);
    light.position.set(60, 100, 20);
    scene.add(light);

    /*
    var hemi = new THREE.HemisphereLight(0xffffff,0xffffff,0.5);
    hemi.position.set(0,0,5);
    scene.add(hemi);
*/
    controls = new OrbitControls (camera ,renderer.domElement );
    controls.update();

    //creacion objeto y malla
    /*
    var cubeGeo = new THREE.BoxGeometry(10,10,10);
    var cubeMaterial = new THREE.MeshLambertMaterial( {color:0xee1122});
    var mesh = new THREE.Mesh(cubeGeo,cubeMaterial);
    scene.add(mesh);
    */
/*

    let material = new THREE.MeshLambertMaterial({color: "lightgreen", flatShading: true})

    let bottomBox = new THREE.BoxGeometry(50,50,300)
    let bottomMesh = new THREE.Mesh(bottomBox, material)
    scene.add(bottomMesh)

    let upBox = new THREE.BoxGeometry(50,300,50)
    let upMesh = new THREE.Mesh(upBox, material)
    upMesh.position.set(0,125,125)
    scene.add(upMesh)

    let topBox = new THREE.BoxGeometry(150,50,50)
    let topMesh = new THREE.Mesh(topBox, material)
    topMesh.position.set(100,250,125)
    scene.add(topMesh)

    let topPlane = new THREE.PlaneGeometry(50,50,32)
    let topPlaneMesh = new THREE.Mesh(topPlane, material)
    topPlaneMesh.position.set(200,275,125)
    topPlaneMesh.rotation.x = THREE.Math.degToRad(-90)
    scene.add(topPlaneMesh)

    let topTriGeometry = new THREE.Geometry()
    topTriGeometry.vertices.push(new THREE.Vector3(0,0,0))
    topTriGeometry.vertices.push(new THREE.Vector3(50,0,0))
    topTriGeometry.vertices.push(new THREE.Vector3(50,50,0))
    topTriGeometry.faces.push(new THREE.Face3(0,1,2))
    topTriGeometry.computeFaceNormals()

    let topTriMesh = new THREE.Mesh(topTriGeometry, material)
    topTriMesh.position.set(225, 275, 150)
    topTriMesh.rotation.z = THREE.Math.degToRad(180)
    scene.add(topTriMesh)

*/

    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        '/blend/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {

            scene.add( gltf.scene );
        
            gltf.scene.getWorldPosition(child.position);
        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }

       
    );


}

function update() {
    requestAnimationFrame( update);
    render();
}

function render(){
    controls.update();
    renderer.render(scene,camera);
}