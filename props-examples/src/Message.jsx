import React from 'react'

const Message = ({ isVisible }) => {
    return (
        <div>


            {
                isVisible ? <h1>Message is visible</h1> : <h1>Message is not visible</h1>
            }

        </div>
    )
}

export default Message