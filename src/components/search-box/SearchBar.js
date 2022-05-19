import React from "react";
import './search-box.css'

const SearchBar = ({className, placeholder, onChangeHandler}) => {


        return (
            <div>
                <input
                    className={className} 
                    onChange={onChangeHandler} 
                    type='search' 
                    placeholder={placeholder}
                     />
            </div>
            
        )
    
}

export default SearchBar;

