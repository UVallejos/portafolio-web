import React from 'react'

const ProyectCard = ({ imgURL, title, description }) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-xl'
             style={{ background:`url(${imgURL})`, backgroundSide: 'cover' }}>
        </div>
        <div className='text-white rounded-b-xl'>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProyectCard