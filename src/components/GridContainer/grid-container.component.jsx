import React from 'react'
import './grid-container.css'
import Card from '../Card/card.component'

const GridContainer = ({items}) => {
    return (
        <div className='grid-container'>
            {items.map(item => (
                <Card items={item} />
            ))}
        </div>
    )
}

export default GridContainer;

