import React from 'react'
import Buttons from './Buttons'
import Fecha from './Fecha'
import Links from './Links'

const CardBody = () => {
    return (
        <div className="card-body">
            <h5 className="card-title">It's Closing Time</h5>
            <p className="card-text">Billion Dollar Orphans  estimate that plugging 2.6 million documented onshore wells in the U.S,
                alone will cost $280 billion. This estimate excludes costs to plug an additional estimated 1.2 million undocumented onshore wells
            </p>

            <Buttons />
            <Fecha />
            <Links />
        </div>
    )
}

export default CardBody