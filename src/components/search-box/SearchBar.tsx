import React from "react";
import './search-box.css';


const SearchBar= ({className, placeholder, onChangeHandler}) => (
    <input
        className={`search-box ${className}`} 
        onChange={onChangeHandler} 
        type='search' 
        placeholder={placeholder}
     />
)
        


export default SearchBar;

