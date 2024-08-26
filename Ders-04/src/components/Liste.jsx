import React from 'react'
import ListEleman from './ListEleman'

const Liste = ({ notlar, setNotlar }) => {
    return (
        <ul id="liste">
            {notlar.map(not => (
                <ListEleman key={not.id} note={not} setNotlar={setNotlar} />
            )
            )}
        </ul>
    )
}

export default Liste