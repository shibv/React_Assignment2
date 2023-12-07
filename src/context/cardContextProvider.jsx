import React, {  useState, useEffect, createContext } from "react";
import axios from "axios";

export const CardContext = createContext();


export const CardContextProvider = ({children}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData(){
          const {data} = await axios.get(`https://api.punkapi.com/v2/beers`)
          
          setItems(data)
        }
        fetchData();
      
       },[])

  return (
   <CardContext.Provider value={[items, setItems]}>
    {children}

   </CardContext.Provider>
  );
};


