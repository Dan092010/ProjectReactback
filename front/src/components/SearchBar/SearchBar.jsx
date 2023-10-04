import React, { useState, useEffect } from "react";
//import data from "../cards/inicio/products.json";
import '../../assets/css/main.scss'
import SearchInput from "./Searchinput";
import Card from "./card";
import axios from 'axios';

function Searchbar() {

  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerCards();
  }, []);

  const obtenerCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cardInicio');
      setData(response.data);

    } catch (error) {
      console.error('Error al obtener las tarjetas:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = () => {
    console.log("search", searchTerm);
  };
  // data.map((x) =>{
  //   if(x.titulo = "BMW M1"){
  //     alert("Si tenemos ese carro")
  //   }
  // } )
  // // alert(listaNombre)

  return (
    <div className="searchInput">
      <SearchInput
        value={searchTerm}
        onChange={onChange}
        onSearch={onSearch}
        
      />
      
      
      <div className="template_Container">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return true;
            } else if (
              val.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true; 
            }
            return false; 
          })
          .map((val) => {
            return <Card val={val} key={val.id} />;
          })}
      </div>
    </div>
  );
}

export default Searchbar;
