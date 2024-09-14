import { Suspense, useState } from 'react'
import { Loading, Navbar, NotFound } from './components'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SearchContext } from './context/searchContext';
import { ProductDetail, Products } from './pages';
import './App.css'

function App() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <SearchContext.Provider value={
        {
          searchText: searchText,
          setSearchText: setSearchText
        }
      }>
        <Router basename="/">
          <Navbar title="Açık Üniversite" hasSearchBar searchText={(e: string) => setSearchText(e)} />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </SearchContext.Provider>
    </div>
  )
}

export default App
