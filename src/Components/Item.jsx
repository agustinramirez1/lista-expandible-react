import React, { useState } from 'react'
import Body from './Body'

//Item viene del padre que en este caso es List

const Item = ({ index, item, indexActivo, setIndexActivo, activarAccordion}) => {
    const { title, body } = item  //Se descompone List por sus items que se trajo del mismo

    // console.log(title)

    const active = (index == indexActivo) ? true : false
    const show = (active == true) ? 'show' : ''

    const handleClick = () => {
        if (active == true) {
            setIndexActivo(null)
        } else {
            setIndexActivo(index)
        }

        activarAccordion()

        
    }

    return (
        <div className='accordion-item'>

            <h2 className='accordion-header border-2 border-bottom'>
                <button className='accordion-button collapsed' type='button' onClick={handleClick}>
                    {title}
                </button>
            </h2>


            <div className={'accordion-collapse collapse ' + show}>
                <div className='accordion-body'>{body}</div>
            </div>
        </div>
    )
}

export default Item