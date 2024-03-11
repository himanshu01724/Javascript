import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import FirstComponent from './pages/FirstComponent';
import SecondComponent from './pages/SecondComponent';
import ThirdComponent from './pages/ThirdComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        App
        <Routes>
        <Route path="/" element={<h1>Himanshu</h1>}/>
            
          <Route path="path" element={<FirstComponent />}>
            <Route path="second" element={<SecondComponent />} />
            <Route path="third" element={<ThirdComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
