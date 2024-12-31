import React from 'react'
import PropTypes from 'prop-types'


const PropValidation = ({ name, age }) => {
    return (
        <div>

            <p>{name}</p>
            <p>{age}</p>

        </div>
    )
}


PropValidation.defaultProps = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default PropValidation