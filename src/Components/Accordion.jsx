import React, { useEffect, useState } from 'react'
import Item from './Item'

const Accordion = ({ items, index, indexAccordionActivo, setIndexAccordionActivo }) => {
    const [indexActivo, setIndexActivo] = useState(null)

    const accordionActive = (index == indexAccordionActivo) ? true : false

    const activarAccordion = () => {
        setIndexAccordionActivo(index)
    }

    useEffect(() => {
        //Cuando el accordion no esta activo ninguno de sus hijos.
        if (accordionActive == false) {
            setIndexActivo(null)
         }

    }, [indexAccordionActivo])


    return (
        <div className='accordion my-3'>
            {items.map((item, index) => (
                <Item
                    key={index}
                    index={index}
                    item={item}
                    indexActivo={indexActivo}
                    setIndexActivo={setIndexActivo}
                    activarAccordion={() => activarAccordion()
                    }
                />
            ))}
        </div>
    )
}

export default Accordion