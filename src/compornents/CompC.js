import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {
    const {countProvided, dispatchProvided} = useContext(AppContext)
    return (
        <div>
            <button onClick={() => dispatchProvided('add_1')}>ADD + 1</button>
            <button onClick={() => dispatchProvided('multiple_3')}>MULTIPLE * 3</button>
            <button onClick={() => dispatchProvided('reset')}>RESET</button>
        </div>
    )
}

export default CompC
