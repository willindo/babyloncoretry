import React, { useEffect, useRef } from 'react';
import  { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, ShaderMaterial }  from '@babylonjs/core';
import * as BABYLON from '@babylonjs/core';
function Shad() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new Engine(canvasRef.current);
      const scene = new Scene(engine);
      new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
      new HemisphericLight('light', new Vector3(0, 1, 0), scene);
      var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 1), scene);
      var light2 = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);   
      light2.intensity =0.5;
  
      BABYLON.Effect.ShadersStore["customVertexShader"]= "\r\n"+   
          "precision highp float;\r\n"+
  
          "// Attributes\r\n"+
          "attribute vec3 position;\r\n"+
          "attribute vec3 normal;\r\n"+
          "attribute vec2 uv;\r\n"+
  
          "// Uniforms\r\n"+
          "uniform mat4 worldViewProjection;\r\n"+
          "uniform float box_spacing;\r\n"+
          "uniform float time;\r\n"+
  
          "// Varying\r\n"+
          "varying vec2 vUV;\r\n"+
  
          "void main(void) {\r\n"+
          "    vec3 p = position;\r\n"+
          "    float bn = floor(position.x / box_spacing);\r\n"+
          "    p.y = p.y + sin(time + bn/4.0);\r\n"+
          "    gl_Position = worldViewProjection * vec4(p, 1.0);\r\n"+
  
          "    vUV = uv;\r\n"+
          "}\r\n";
  
      BABYLON.Effect.ShadersStore["customFragmentShader"]="\r\n"+
         "precision highp float;\r\n"+
  
          "varying vec2 vUV;\r\n"+
  
          "uniform sampler2D textureSampler;\r\n"+
  
          "void main(void) {\r\n"+
          "    gl_FragColor = texture2D(textureSampler, vUV);\r\n"+
          "}\r\n";
  
  
  
      var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {
          vertex: "custom",
          fragment: "custom",
          },
          {
              attributes: ["position", "normal", "uv"],
              uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
          });
  
  
     var mainTexture = new BABYLON.Texture("../sand.jpg", scene);
  
      shaderMaterial.setTexture("textureSampler", mainTexture);
  
      shaderMaterial.backFaceCulling = false;
  
      //Create SPS of Boxes
      var boxes = 101; //odd number
      var box_size = 0.25; // must be float
      var box_gap = box_size/2;
      var box_spacing = box_size + box_gap;
      var box = BABYLON.MeshBuilder.CreateBox("box", {size:box_size}, scene);
  
      var boxes_SPS = new BABYLON.SolidParticleSystem("boxesSPS", scene, {updatable: false});
      
      //function to position boxes
      var set_boxes = function(particle, i, s) {   
          var mid_point = Math.floor(boxes/2);
          particle.position.x = (i - mid_point) * box_spacing + box_size/2;
      }
  
      boxes_SPS.addShape(box, boxes, {positionFunction:set_boxes});  
      var boxes = boxes_SPS.buildMesh(); // mesh of leaves
      box.dispose(); 
  
      boxes.material = shaderMaterial;
      boxes.material.setFloat("box_spacing", box_spacing)
                  
  
      var time = 0.;
      scene.registerBeforeRender(function() {
          boxes.material.setFloat("time", time);
          time +=0.1;        
      });

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

export default Shad;
