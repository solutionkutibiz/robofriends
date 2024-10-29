import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error ('An Error Occured');
    // }
        return( 
        <div>  
       {
        robots.map((user, ii) => {
       return (
        <Card 
        key={ii} 
        id={robots[ii].id} 
        name={robots[ii].name} 
        email={robots[ii].email}
        />
        );
    })
        }
        </div>
    );
}

export default CardList;





