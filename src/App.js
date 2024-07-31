import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Result from './Components/result';
// import Second from './Components/Second';
// import Third from './Components/Third';

function App() {
  return (

    <div>




      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Result />} />
          {/* <Route path="/Second" element={<Second />} /> */}
          {/* <Route path="/Third" element={<Third />} /> */}


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
