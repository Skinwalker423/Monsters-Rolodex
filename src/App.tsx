import React, {useState, useEffect, ChangeEvent} from "react";
import axios from 'axios';
import CreateMonsterList from "./components/card-list/createMonsterList";
import SearchBar from "./components/search-box/SearchBar";
import { getData } from "./utils/data.utils";


export type Monster = {
  id: string;
  name: string;
  email: string;
}


const App = () => {

  const [value, setValue] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monsters Rolodex');


  

  useEffect(()=> {
  //   console.log('useeffect1');
  //   const getMonsters = async() => {
  //       const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     setMonsters(res.data);
  // }
  //   getMonsters();

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    
    fetchUsers();

  }, [])

  useEffect(()=> {
    console.log('filtered mosters');
    const newFilteredMonsters = monsters.filter(monster => {
          return monster.name.toLowerCase().includes(value)
      });
    setFilteredMonsters(newFilteredMonsters);
      
  }, [value, monsters])

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) : void => {
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






