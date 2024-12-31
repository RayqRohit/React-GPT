import React from 'react'

const Greetings = ({message}) => {
    return (
        <div>Greetings : {message}</div>
    )
}

Greetings.defaultProps = {
    message: 'Hello, default message!',
}


export default Greetings