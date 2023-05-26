import React, { useState } from 'react'

const Contenido = ({ item, index }) => {
    const { title, body } = item
    const [indexActivo, setIndexActivo] = useState(false)
    const show = (indexActivo == true) ? 'show' : ''

    const handleClick = () => {
        setIndexActivo(!indexActivo)
    }

    return (
        <div className="accordion">
            <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-primary-subtle" type="button" onClick={handleClick}>
                        {title}
                    </button>
                </h2>
                <div className={'accordion-collapse collapse ' + show}>
                    <div className='accordion-body'>{body}</div>
                </div>
            </div>
        </div >



        // <div classNameName='accordion-item'>

        //     <h2 classNameName='accordion-header border-2 border-bottom'>
        //         <button classNameName='accordion-button collapsed' type='button' onClick={handleClick}>
        //             {title}
        //         </button>
        //     </h2>
        //     <div classNameName={'accordion-collapse collapse ' + show}>
        //         <div classNameName='accordion-body'>{body}</div>
        //     </div>
        // </div>
    )
}

export default Contenido