import React, {FC} from "react";
import { Monster } from "../../App";
import '../search-box/search-box.css';

export type CardProps = {
    monster: Monster;
}

const Card = ({monster}: CardProps) => {

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