import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1 className='text-4xl text-blue-800'>blog application</h1>
    </>
  )
}

export default App
