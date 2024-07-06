import { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import "./components/Embla3.css";
import Particle from "./components/Particle";
import Tryshader from "./components/Tryshader";
import Waterpool from "./components/Waterpool";
import Shad from "./components/Shad";
import Water1 from "./components/Water1";
import Water2 from "./components/Water2";
import Water3 from "./components/Water3";
import Water4 from "./components/Water4";
import BabylonScene from "./components/BabylonScene";
import EmblaCarousel from "./components/EmblaCarousel";
import EmblaCarousel2 from "./components/EmblaCarousel2";
import EmblaCarousel3 from "./components/EmblaCarousel3";
import Connected from "./components/Connected";
import { Waving } from "./components/Waving";
import Instaced from "./components/Instaced";
import Terraz from "./components/Terraz";
import Particles from "./components/Particles";
import Flownode from "./components/Flownode";
import Dragnode from "./components/Dragnode";
import Flowdrag from "./components/Flowdrag";

import NavigationMenu2 from "./components/NavigationMenu";

function App() {
  const [count, setCount] = useState(0);
  const OPTIONS = { loop: true };
  const OPTIONS1 = { axis: "y" };
  const OPTIONS2 = { loop: true, speed: 0.5, stopOnMouseEnter: false };
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  let tl = gsap.timeline();
  // tl.to(".ab", { x: 25, y: 50, duration: 3, yoyo: true }).to(".ab", {
  //   scaleX: 2,
  //   duration: 1,
  //   repeat: 4,
  // yoyo: true,
  // });
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="water1" element={<Water1 />} />
          <Route path="water2" element={<Water2 />} />
          <Route path="water3" element={<Water3 />} />
          <Route path="water4" element={<Water4 />} />
          <Route path="waterpool" element={<Waterpool />} />
          <Route path="waving" element={<Waving />} />
          <Route path="terraz" element={<Terraz />} />
          <Route path="tryshader" element={<Tryshader />} />
          <Route path="particles1" element={<BabylonScene />} />
          <Route path="mix" element={<Particle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
function Layout() {
  return (
    <>
      <nav className="laynav">
        <ul className="nav1">
          <li>
            <Link to="/">Animation Skew</Link>
          </li>
          <li>
            <Link to="/water1">Water 1</Link>
          </li>
          <li>
            <Link to="/water2">Water2</Link>
          </li>
          <li>
            <Link to="/water3">Water3</Link>
          </li>
          <li>
            <Link to="/water4">Water4</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export function Home() {
  const SLIDES = [
    <Water1 />,
    <Water2 />,
    <Water3 />,
    <Water4 />,
    <Waterpool />,
  ];
  const SLIDES1 = [<BabylonScene />, <Shad />, <Particle />, <Tryshader />];
  const SLIDES2 = [
    "Next.js",
    "React",
    "Express.js",
    "Mongodb",
    "Tailwind css",
    "GSAP",
    "Three.js",
    "R3Fibre",
    "Babylon.js",
    "Sass",
  ];
  return (
    <>
      {/* <div> */}
      {/* <EmblaCarousel3 slides={SLIDES2} options={OPTIONS2} />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="ab"></div>
      <Connected />
      <Instaced /> */}
      {/* <Waving /> */}
      <Flownode />

      {/* <Flowdrag />; */}
      {/* <Dragnode /> */}
      {/* <Terraz /> */}
      {/* <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Particles />
      </Canvas> */}
      <NavigationMenu2 />
      {/* </div> */}
    </>
  );
}
