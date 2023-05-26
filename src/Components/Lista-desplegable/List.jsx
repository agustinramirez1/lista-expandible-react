import React, { useState } from 'react'
import Accordion from './Accordion'
const List = () => {
    let list = [
        [
            { "title": "Holdback", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "Financial Assurance", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "Liability Ringfencing", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "ARO Creditor Rights", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" }
        ],
        [
            { "title": "Joint and Several Liability", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "Colorado", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "Joint and Several Liability", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
            { "title": "ARO Moral Hazard", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" }
        ]
    ]

    const [indexAccordionActivo, setIndexAccordionActivo] = useState(null)

    return (
        <div className='container'>
            <div className='row row-cols-2'>
                {list.map((items, index) => (
                    <Accordion 
                    key={index} 
                    items={items} 
                    index={index}
                    indexAccordionActivo={indexAccordionActivo}
                    setIndexAccordionActivo={setIndexAccordionActivo}
                    />
                ))}
            </div>
        </div>
    )
}

export default List