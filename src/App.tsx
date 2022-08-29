import React, {useState, useEffect, ChangeEvent, ChangeEventHandler} from "react";
import axios from 'axios';
import CreateMonsterList from "./components/card-list/createMonsterList";
import SearchBar from "./components/search-box/SearchBar";
import { getData } from "./utils/data.utils";

export type Monster = {
  name: string;
  id: string;
  email: string;
}

const App = () => {

  const [value, setValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monsters Rolodex');


  useEffect(()=> {
  
    const fetchUsers = async () => {
      const monstersData = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      
      setMonsters(monstersData);
    }
    
    fetchUsers();

  }, [])

  useEffect(()=> {
    console.log('filtered monsters');
    const newFilteredMonsters = monsters.filter(monster => {
          return monster.name.toLowerCase().includes(value)
      });
    setFilteredMonsters(newFilteredMonsters);
      
  }, [value, monsters])

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) : void => {
    const inputValue = e.target.value.toLowerCase();
    setValue(inputValue);
    setTitle(inputValue);

  }



  

    return(
      <div className="ui container">
        <h1 className="app-title">{title}</h1>
        <SearchBar 
          onChangeHandler={onValueChange} 
          placeholder='search monster'
          className='search-box'
        />
        <CreateMonsterList monsters={filteredMonsters} />
      </div>
    )
  
}

export default App;






