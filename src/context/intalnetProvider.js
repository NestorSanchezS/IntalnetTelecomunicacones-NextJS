import React, { createContext, useEffect, useState } from 'react'
import { BASE_URL } from '../components/constans/dominio';

export const IntalnetContext = createContext();

export const IntalnetProvider = ({children}) => {

    const [getCities, setGetCities] = useState([]);
    useEffect(() => {
      try {
        const getApiCities = async () => {
          const url = `${BASE_URL}cities`
          const response = await fetch(url);
          const data = await response.json();
          setGetCities(data);
        };
        getApiCities();
      } catch (error) {
        console.log(error);
      }
    }, []);

return (
    <IntalnetContext.Provider
        value={{getCities}}
    >
        {children}
    </IntalnetContext.Provider>
)
    
}