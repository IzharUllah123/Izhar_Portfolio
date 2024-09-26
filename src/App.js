import './App.css';

import React, { createContext, useState } from 'react';
import Main from './Components/Main';
// import Header from './Components/Header';
// import Hero from './Components/Hero';


export const ThemeContext=createContext(null)

function App() {

  
  const [theme, setTheme] = useState(false);
  

    const toggle = () => {
        setTheme(!theme);
    };

   
 return (
       <ThemeContext.Provider value={{theme,toggle}}>
         <div className={`${theme ? 'bg-gray-900 text-gray-200 font-serif' : 'bg-gray-100 text-gray-900 font-serif'}
              `
        }>
           <Main />
         
         </div>
         </ThemeContext.Provider>
  )
  
  };

export default App;


