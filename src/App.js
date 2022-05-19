import React, {useState, useEffect} from "react";
import axios from 'axios';
import CreateMonsterList from "./components/card-list/createMonsterList";
import SearchBar from "./components/search-box/SearchBar";


const App = () => {

  const [value, setValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monsters Rolodex');


  

  useEffect(()=> {
    console.log('useeffect1');
    const getMonsters = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setMonsters(res.data);
  }
    getMonsters();
  }, [])

  useEffect(()=> {
    console.log('filtered mosters');
    const newFilteredMonsters = monsters.filter(mon => {
          return mon.name.toLowerCase().includes(value)
      });
    setFilteredMonsters(newFilteredMonsters);
      
  }, [value, monsters])

  const onValueChange = (e) => {
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






