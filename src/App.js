
import Body from './components/body/Body';
import Album from './components/body/Album/Album';
import Navbar from './components/header/Navbar';
import NotFound from './components/notFound/NotFound';
import { DataContextProvider } from './components/context/DataContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/album/:slug" element={<Album />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;