import React, {ChangeEventHandler} from "react";
import './search-box.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBar = ({className, placeholder, onChangeHandler,}: SearchBoxProps) => (
    <input
        className={`search-box ${className}`} 
        onChange={onChangeHandler} 
        type='search' 
        placeholder={placeholder}
     />
)
        


export default SearchBar;

