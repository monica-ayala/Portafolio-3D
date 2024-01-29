import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Cat extends THREE.Object3D {
  constructor() {
    super();
    this.loadModel();
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '../../assets/scene.gltf', // Adjust the path as necessary
      (gltf) => {
        // Assuming the model is scaled correctly for your scene
        this.add(gltf.scene);
      },
      undefined, // onProgress callback not handled here
      (error) => {
        console.error('An error happened loading the cat model', error);
      }
    );
  }
}
