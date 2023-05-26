import React from 'react'

const Body = ({ item, index, bodyActivo, setBodyActivo }) => {
    const active = (index == bodyActivo) ? true : false
    const handleClick = () => {
        setBodyActivo(index)
    }
    return (
        <li key={index} onClick={handleClick}>
            {item}
        </li>
    )
}

export default Body