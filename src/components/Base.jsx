import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

const Base = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current);
            const scene = new BABYLON.Scene(engine);

engine.runRenderLoop(() => {
    scene.render();
});

return () => {
    scene.dispose();
    engine.dispose();
}
        }
},[])
    return (
        <canvas ref={canvasRef} />
    );
}


export default Base;
