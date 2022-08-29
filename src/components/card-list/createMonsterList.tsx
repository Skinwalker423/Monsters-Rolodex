import React from "react";
import '../search-box/search-box.css';
import Card from "../card/card";



const CreateMonsterList = ({monsters}) => {

    const renderList = () =>{
        return monsters.map((monster) => 
        <div key={monster.id} className="card-container">
            <Card monster={monster} />
        </div>
        )
    }

        if(!monsters){
            return <div>Loading...</div>
        }

        return(
            <div className="card-list">
                {renderList()}
            </div>
        )
}

export default CreateMonsterList;