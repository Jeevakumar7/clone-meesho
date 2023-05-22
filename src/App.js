import { Route, Routes } from 'react-router-dom';
import '../src/Topcomponent/Style.css'
import Dashbord from './Topcomponent/Dashbord';
import Bags from './Topcomponent/Products/Bags';
import Kids from './Topcomponent/Products/Kids';
import Mens from './Topcomponent/Products/Mens';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Topcomponent/Card.css';


function App() {
  return (
    
  <>
 {/* <Dashbord/> */}
 <Routes>
  <Route path='/' element={<Dashbord/>}/>
  <Route path='/bags' element={<Bags/>}/>
  <Route path='/kids' element={<Kids/>}/>
  <Route path='/mens' element={<Mens/>}/>
 </Routes>
  </>
   
  );
}

export default App;
