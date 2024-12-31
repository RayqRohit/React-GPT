import React from 'react'
import Message from './Message'

const MessageHead = () => {


    const [ShowMessages, setShowMessages] = React.useState(false)


    return (
        <div>
            <button onClick={() => setShowMessages(!ShowMessages)}>Toggle Message</button>
            <Message isVisible={ShowMessages} />
        </div>
    )
}

export default MessageHead