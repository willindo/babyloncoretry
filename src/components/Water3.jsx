import React, { useEffect, useRef } from 'react';
import  { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, ShaderMaterial }  from '@babylonjs/core';
import * as BABYLON from '@babylonjs/core';
import { WaterMaterial } from '@babylonjs/materials';

function Water3
() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new Engine(canvasRef.current);
      const scene = new Scene(engine);
      var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 4, 100, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true, false);
  
      var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
      
      // Skybox
      var skybox = BABYLON.Mesh.CreateBox("skyBox", 5000.0, scene);
      var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../TropicalSunnyDay/TropicalSunnyDay", scene);
      skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.disableLighting = true;
      skybox.material = skyboxMaterial;
          
      // Water
      var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 2048, 2048, 16, scene, false);
      var water = new WaterMaterial("water", scene, new BABYLON.Vector2(512, 512));
      water.backFaceCulling = true;
      water.bumpTexture = new BABYLON.Texture("../waterbump.png", scene);
      water.windForce = -10;
      water.waveHeight = 1.7;
      water.bumpHeight = 0.1;
      water.windDirection = new BABYLON.Vector2(1, 1);
      water.waterColor = new BABYLON.Color3(0, 0, 221 / 255);
      water.colorBlendFactor = 0.0;
      water.addToRenderList(skybox);
      waterMesh.material = water;
   

      engine.runRenderLoop(() => {
        scene.render();
      });

      return () => {
        engine.dispose();
      };
    }
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Water3
;