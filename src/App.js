import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Container from '@mui/material/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';



function App() {
  return (
    <BrowserRouter>
    
        <Header />
        <div className="app">
          <Container className = "Container">
            <Routes>
              <Route path="/" element = {<Trending />} exact/>
              <Route path='/movies' element = {<Movies />}/>
              <Route path='/series' element = {<Series />}/>
              <Route path='/search' element = {<Search />}/>

            </Routes> 
          </Container>
        </div>
  
    </BrowserRouter>
    
    
  );
}

export default App;
