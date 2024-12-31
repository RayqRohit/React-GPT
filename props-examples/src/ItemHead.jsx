import React from 'react'
import ItemList from './ItemList';

const ItemHead = () => {

    const items = ['Item 1', 'Item 2', 'Item 3'];


    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemHead