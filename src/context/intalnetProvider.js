import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../components/constans/dominio";

export const IntalnetContext = createContext();

export const IntalnetProvider = ({ children }) => {
  //get cities
  const [getCities, setGetCities] = useState([]);
  const [getProductCardApi, setGetProductCardApi] = useState([]);
  useEffect(() => {
    const getApiCities = async () => {
      try {
        const url = `${BASE_URL}cities`;
        const response = await fetch(url);
        const data = await response.json();
        setGetCities(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiCities();
  }, []);

  //get products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = `${BASE_URL}products`;
        const response = await fetch(url);
        const data = await response.json();
        setGetProductCardApi(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <IntalnetContext.Provider value={{ getCities, getProductCardApi }}>
      {children}
    </IntalnetContext.Provider>
  );
};
