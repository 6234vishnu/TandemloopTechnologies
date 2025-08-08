import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Problem from './problem1/problem1'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Problem/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
