import React from 'react'
import Contenido from './Contenido'

const Bloque = () => {
    let bloque = [
        { "title": "Holdback", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
        { "title": "Financial Assurance", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" },
        { "title": "Liability Ringfencing", "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam animi ipsum recusandae quos facere molestias placeat exercitationem, voluptas mollitia laboriosam veniam nihil et vel pariatur facilis harum possimus enim?" }
    ]

    return (
        <div className='container'>
            <div>
                {bloque.map((item, index) => (
                    <Contenido 
                    key={index} 
                    item={item} 
                    index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Bloque