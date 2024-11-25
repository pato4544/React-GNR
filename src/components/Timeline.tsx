import React, { FC } from 'react'
import ITimeline from '../type/ITimeline'


const Timeline:FC<ITimeline> = ({titulo, imagen, contenido}) => {
    return ( 
        <div>
            <div>
                <img src={imagen} alt={imagen} />
            </div>
            <div>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
            </div>
        </div>
    )
  }

  export default Timeline