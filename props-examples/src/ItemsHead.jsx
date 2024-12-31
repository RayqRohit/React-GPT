import React from 'react'
import Items from './Items'
const ItemsHead = () => {

    const itemsList = ['Apple', 'Banana', 'Cherry']


    return (
        <div>
            <Items itemsList={itemsList}/>
        </div>
    )
}

export default ItemsHead