import { useState } from 'react'
import './App.css'
import BasicEffect from './components/BasicEffect'
import FetchData from './components/FetchData'
import Timer from './components/Timer'
import Counter from './components/Counter'
import ShoppingCart from './components/ShoppingCart'
import PostList from './components/PostList'
import MyForm from './components/MyForm'

function App() {
  const [show, setShow] = useState<boolean>(true)

  return (
    <div>
      {/* <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      <br />
      <br />

      {show && <BasicEffect />} */}

      <br />

      <hr />

      {/* <PostList /> */}
      <MyForm />
      {/* <FetchData /> */}
      {/* <br />
      <hr />
      <Timer /> */}
      {/* 
      <Counter />
      <ShoppingCart /> */}
    </div>
  )
}

export default App
