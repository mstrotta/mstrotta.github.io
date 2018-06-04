import * as THREE from 'three.js';

var SCALE = 0.25;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
		75, 
		window.innerWidth / window.innerHeight,
		0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(SCALE * window.innerWidth, 
		SCALE *window.innerHeight);

var loader = new THREE.STLLoader();
loader.load('static/surfs/lh.pial.stl');
document.body.appendChild(renderer.domElement)

