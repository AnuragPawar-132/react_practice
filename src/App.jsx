import './App.css'
import { Form } from './pages/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseContext } from './pages/UseContext';
import { UseReducer } from './pages/UseReducer';
import { UseMemo } from './pages/UseMemo';
import UseRef from './pages/UseRef';
import { MouseAction } from './pages/MouseAction';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home">
          <Route path='form' element={<Form />} />
          <Route path="blogs" element={<h1>Blogs</h1>} />
          <Route path='mouse' element={<MouseAction/>}/>
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
        {/* <Route path="/hooks">
          <Route path='/useContext' element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer/>} />
          <Route path='/useMemo' element={<UseMemo/>}/>
          <Route path='/useRef' element={<UseRef/>}/>
          <Route path="*" element={<h1>No Page</h1>} />
        </Route> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
