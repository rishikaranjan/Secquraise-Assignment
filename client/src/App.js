import { HomeScreen } from "./Screens/HomeScreen";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { UplaodImages } from "./Screens/UploadImages";




function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path = '/' element ={<HomeScreen/>}/>
          <Route path = '/uploadImages' element ={<UplaodImages/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
