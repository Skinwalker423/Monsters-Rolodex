import React from "react";
import '../search-box/search-box.css';
import {Monster} from '../../App';

type CardProps = {
    monster: Monster;
}


const Card = ({monster} : CardProps) => {

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