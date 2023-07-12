import React, { useState } from "react";
import data from "../cards/inicio/products.json";
import '../../assets/css/main.scss'
import SearchInput from "./Searchinput";
import Card from "./card";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = () => {
    console.log("search", searchTerm);
  };

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
              return val;
            } else if (
              val.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return <Card val={val} key={val.id} />;
          })}
      </div>
    </div>
  );
}

export default Searchbar;
