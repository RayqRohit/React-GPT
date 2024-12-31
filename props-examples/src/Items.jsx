import React from 'react'

const Items = ({ itemsList }) => {
    return (
        <div>

            <ul>
                {itemsList.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

        </div>
    )
}

export default Items