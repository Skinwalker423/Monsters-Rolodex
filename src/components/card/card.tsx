import React from "react";
import '../search-box/search-box.css';


const Card = ({monster}) => {

        const {id, email, name} = monster;

        return(
            <>
                <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <div>{name}</div>
                <div>{email}</div>
            </>
        )
}

export default Card;