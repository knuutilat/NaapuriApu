import {useState} from 'react';
import Card from './Card';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
const ShoppingList = (props) => {

    let items = props.list.map((item,index) => {
      
        return(
            <Card key={item._id} item={item} index={index} />
        )
    })

    return(
       <div>
        <h3>Ilmoitukset</h3>
        {items}
        </div>
    )

}

export default ShoppingList;