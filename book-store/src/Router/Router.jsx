import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Register from '../Components/Navbar/Register'
import NotFound from '../Pages/NotFound/NotFound'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function Router(){

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'Kalvium',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBooks(data.books);
          console.log(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchData();
  }, []);
  
    return(
        <BrowserRouter>
        <Navbar data={books} handleData={setBooks}/>
        <Routes>
          <Route path='/register' element={<Register />}></Route> 
          <Route path='/' element={<Home data={books}/>}/>
          <Route path='*' element={<NotFound/>}/>  
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}