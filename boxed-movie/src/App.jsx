import { Route, Routes, } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import MovieShow from './pages/MovieShow';
import NotFound from './components/not-Found/NotFound';
import './App.css';
import View from "./pages/View";

function App() {

  return (
    <>
      <div className='container-fluid m-0 p-0'>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieShow />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
