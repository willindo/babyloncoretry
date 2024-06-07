import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import"./components/Embla.css"
// import"./components/Embla2.css"
import"./components/Embla3.css"
import Particle from './components/Particle'
import Tryshader from './components/Tryshader'
import Waterpool from './components/Waterpool'
import Shad from './components/Shad'
import Water1 from './components/Water1'
import Water2 from './components/Water2'
import Water3 from './components/Water3'
import Water4 from './components/Water4'
import BabylonScene from './components/BabylonScene'
import EmblaCarousel from './components/EmblaCarousel'
import EmblaCarousel2 from './components/EmblaCarousel2'
import EmblaCarousel3 from './components/EmblaCarousel3'


function App() {
  const [count, setCount] = useState(0)
  const OPTIONS = { loop: true }
  const OPTIONS1 = { axis: 'y' }
  const OPTIONS2 = {loop:true,speed:0.5,stopOnMouseEnter:false}
    // const SLIDE_COUNT = 5
    // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const SLIDES = [<Water1/>,<Water2/>,<Water3/>,<Water4/>,<Waterpool/>]
    const SLIDES1 = [<BabylonScene/>,<Shad/>,<Particle/>,<Tryshader/>,]
    const SLIDES2 = ['Next.js','React', 'Express.js','Mongodb','Tailwind css','GSAP','Three.js','R3Fibre','Babylon.js','Sass']
  return (
    <>
<EmblaCarousel slides={SLIDES} options={OPTIONS} />
<EmblaCarousel3 slides={SLIDES2} options={OPTIONS2} />
<EmblaCarousel2 slides={SLIDES1} options={OPTIONS1} />
    </>
  )
}

export default App
