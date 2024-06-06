import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders'; // Don't forget to import the loaders
import { WaterMaterial,GridMaterial } from '@babylonjs/materials';
// import './babyl.css'
function BabylonScene() {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current);
            const scene = new BABYLON.Scene(engine);
            const camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", -Math.PI / 2, Math.PI / 2.2, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.attachControl(canvasRef.current, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        
            // Ground for positional reference
            const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 25, height: 25});
            ground.material = new GridMaterial("groundMat");
            ground.material.backFaceCulling = false;
        
            BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0)).start();
        
          
            engine.runRenderLoop(() => {
                scene.render();
            });

            return () => {
                scene.dispose();
                engine.dispose();
            }
        }
    }, []);


    return (
        <canvas ref={canvasRef} />
    );
}

export default BabylonScene;
