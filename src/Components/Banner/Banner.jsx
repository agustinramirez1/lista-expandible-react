import React from 'react'
import Botones from '../Botones/Botones'

const Banner = () => {
  return (
    <div className='container banner my-5'>
        <div className='titulo'>Work less, <br /> achieve more.</div>
        <div className='body'> Our technology is the key to unlocking higher sales and better service.
            We stand behind it with a satisfaction guarantee-try it risk-free and see the results for yourself!
            <Botones background={"rgb(88, 206, 182)"} text={"GET STARTED"} border={"rgb(88, 206, 182)"} color={"white"} />
        </div>
    </div>
  )
}

export default Banner