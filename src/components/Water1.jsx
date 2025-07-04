import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  ShaderMaterial,
} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import { WaterMaterial } from "@babylonjs/materials";

function Water1() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new Engine(canvasRef.current);
      const scene = new Scene(engine);
      var camera = new BABYLON.ArcRotateCamera(
        "Camera",
        (3 * Math.PI) / 2,
        Math.PI / 4,
        100,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(canvasRef.current, true);

      var light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );

      // Skybox
      var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
      var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        "../TropicalSunnyDay/TropicalSunnyDay",
        scene
      );
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE;
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.disableLighting = true;
      skybox.material = skyboxMaterial;

      // Ground
      var groundMaterial = new BABYLON.StandardMaterial(
        "groundMaterial",
        scene
      );
      groundMaterial.diffuseTexture = new BABYLON.Texture(
        "../reflectivity.png",
        scene
      );
      groundMaterial.diffuseTexture.uScale =
        groundMaterial.diffuseTexture.vScale = 4;

      var ground = BABYLON.Mesh.CreateGround(
        "ground",
        512,
        512,
        32,
        scene,
        false
      );
      ground.position.y = -1;
      ground.material = groundMaterial;

      // Water
      var waterMesh = BABYLON.Mesh.CreateGround(
        "waterMesh",
        512,
        512,
        32,
        scene,
        false
      );

      var water = new WaterMaterial("water", scene);
      water.bumpTexture = new BABYLON.Texture("../dog1.png", scene);

      // Water properties
      water.windForce = -15;
      water.waveHeight = 0.3;
      water.windDirection = new BABYLON.Vector2(1, 1);
      water.waterColor = new BABYLON.Color3(0.1, 0.1, 0.6);
      water.colorBlendFactor = 0.3;
      water.bumpHeight = 0.1;
      water.waveLength = 0.1;

      // Add skybox and ground to the reflection and refraction
      water.addToRenderList(skybox);
      water.addToRenderList(ground);

      // Assign the water material
      waterMesh.material = water;

      engine.runRenderLoop(() => {
        scene.render();
      });

      return () => {
        engine.dispose();
      };
    }
  }, []);

  return (
    <>
      <canvas style={{ width: "-webkit-fill-available" }} ref={canvasRef} />;
    </>
  );
}

export default Water1;
