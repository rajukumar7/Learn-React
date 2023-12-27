import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeChanger from './components/ThemeChanger'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl width-5'>Theme Changer</h1>
      <ThemeChanger/>
    </>
  )
}

export default App
