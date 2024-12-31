import React from 'react'
import { useState } from 'react'
import Dispaly from './Dispaly'

const DisplayHead = () => {


    const [text, setText] = useState("intial text")



    return (
        <div>


            <Dispaly message={text} />
            <button onClick={() => setText("Updated Text")}>Change Text</button>


        </div>
    )
}

export default DisplayHead