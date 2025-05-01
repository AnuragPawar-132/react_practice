import './App.css'
import { Form } from './pages/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseContext } from './pages/UseContext';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home">
          <Route path='form' element={<Form />} />
          <Route path="blogs" element={<h1>Blogs</h1>} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
        <Route path="/hooks">
          <Route path='useContext' element={<UseContext />} />
          <Route path="blogs" element={<h1>Blogs</h1>} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
