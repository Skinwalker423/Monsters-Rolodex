import React from "react";
import '../search-box/search-box.css';
import Card from "../card/card";

const CreateMonsterList = ({monsters}) => {

    const renderList = () =>{
        return monsters.map(({name, id, email}) => 
        <div key={id} className="card-container">
            <Card name={name} id={id} email={email} />
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