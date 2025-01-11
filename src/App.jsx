import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListManager from './component/ItmeListManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemListManager />
    </>
  )
}

export default App
