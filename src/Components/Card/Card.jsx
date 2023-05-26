import React from 'react'
import Imagen from './Imagen'
import CardBody from './CardBody'

const Card = () => {
    return (
        <>
            <div className='container p-5'>
                <div className="card mx-auto shadow">
                    <Imagen />
                    <CardBody />
                </div>
            </div>
        </>
    )
}

export default Card