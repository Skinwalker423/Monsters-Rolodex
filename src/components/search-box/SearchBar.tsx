import React, {ChangeEventHandler, FC} from "react";
import './search-box.css';

export type SearchBarProps = {
    className: string;
    placeholder: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBar: FC<SearchBarProps>= ({className, placeholder, onChangeHandler}) => (
    <input
        className={`search-box ${className}`} 
        onChange={onChangeHandler} 
        type='search' 
        placeholder={placeholder}
     />
)
        


export default SearchBar;

