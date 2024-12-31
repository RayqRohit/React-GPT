import React from 'react'
import Card from "./Card"

const CardHead = () => {
    return (
        <div>
            <Card title={"Welcome"} content={"This is a nested content card!"}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque.</p>
            </Card>
        </div>
    )
}

export default CardHead