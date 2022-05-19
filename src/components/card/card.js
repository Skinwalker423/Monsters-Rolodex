import React, { Fragment } from "react";
import '../search-box/search-box.css';


const Card = ({id, email, name}) => {

        return(
            <>
                <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <div>{name}</div>
                <div>{email}</div>
            </>
        )
}

export default Card;