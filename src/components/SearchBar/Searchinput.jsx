import React from "react";
import '../navbar/Navbar.scss'

const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar"> 
	<div className="search-bar__form-container">
		<form>
			<input
			className="search-bar__form-search"
			type="text"
			value={value}
			placeholder="Search here..."
			onChange={onChange}
			/>
			
		</form>
		
	</div>
    </div>
    
  );
};

export default SearchInput;
