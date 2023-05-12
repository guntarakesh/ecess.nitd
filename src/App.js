
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar/Navbar'
import { useState , useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader"
function App() {

 const [loading,setloading] = useState(false);
 useEffect(()=>{
   setloading(true)
   setTimeout(()=>{
    setloading(false)
   },5000)
 },[])

  return (
    <div className="App">
      {
        loading? 
        <GridLoader className='my-loader' color="#36d7b7" />
        :
        <div>
        <Navbar/>
        <Footer/>
          </div>
      }
 
    </div>
  );
}

export default App;
