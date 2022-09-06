import Header from './components/Header.js'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <BrowserRouter>    
       <Header/> 
           <main className ='py-3'>
              <Container>
                  <Routes>         
                      <Route   exact path ='/' element = {<HomeScreen/>} />
                      <Route   path ='/product/:id' element = {<ProductScreen/>} />
                  </Routes>        
              </Container>
          </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
