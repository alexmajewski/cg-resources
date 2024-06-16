import { useState } from 'react'
import './App.css'

import { SearchBar } from "./components/SearchBar.jsx"
import { SearchResultsList } from './components/SearchResultsList.jsx'

function App() {
  const [results, setResults] = useState([])

  return (
    <>  
        <div id="header">
          <h2 id="main-title">CG resources</h2>
          <p>This is my personal curated list of CG tutorials, courses, talks, posts and tools revolving around Houdini.</p>
          <SearchBar setResults={setResults} />
        </div>
        
        
        <SearchResultsList results={results} />
    </>
  )
}

export default App
