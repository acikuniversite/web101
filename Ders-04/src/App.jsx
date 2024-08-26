import { useState } from 'react'
import './App.css'
import Liste from './components/Liste'
import NotGirme from './components/NotGirme'
import Test from './components/Test'

//{id:'',note:'',isChecked:false}
function App() {
  const [notlar, setNotlar] = useState([])

  const gonder = (note) => {
    const item = { id: Date.now(), note: note, isChecked: false }

    setNotlar([...notlar, item])
  }


  return (
    <main id="main-container">
      <Test a={5} b={2} name="Açık Universite" />
      <NotGirme gonder={gonder} />
      <Liste notlar={notlar} setNotlar={setNotlar} />

    </main>
  )
}

export default App
