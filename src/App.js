
import './App.css'
import ContactUS from './Components/ContactUs'
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
      <div>
        <BrowserRouter>
        
          <Routes>


              <Route path='/' element={<Home/>}/>
           
              <Route path='/ContactUS' element={<ContactUS/>}/>
          
          </Routes>
        
        
        </BrowserRouter>
      </div>
  );
}

export default App;
