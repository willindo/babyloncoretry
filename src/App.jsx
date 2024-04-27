import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import BabylonScene from './components/BabylonScene'
// import Fluidparticle from './components/Fluidparticle'
import Particle from './components/Particle'
import Tryshader from './components/Tryshader'
import Waterpool from './components/Waterpool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BabylonScene/> */}
{/* <Fluidparticle/> */}
<div className='big'>

<Particle/>
<Tryshader/>
<Waterpool/>
</div>
    </>
  )
}

export default App
